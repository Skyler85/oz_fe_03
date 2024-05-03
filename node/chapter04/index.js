import cookieParser from "cookie-parser";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 4000;
const HOST = "http://localhost";
const secretText = "superSecret";
const refreshSecretText = "supersuperSecret";

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Han",
    title: "Post 2",
  },
];

let refreshTokens = [];

app.use(express.json());
app.use(cookieParser()); // 쿠키에 담겨있는 토큰을 가져오는 미들웨어

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // JWT를 이용해서 토큰 생성하기 payload + secretText
  // 유효시간 추가
  const accessToken = jwt.sign(user, secretText, { expiresIn: "30s" });

  // jwt를 이용해서 refreshToken도 생성
  const refreshToken = jwt.sign(user, refreshSecretText, { expiresIn: "1d" });
  refreshTokens.push(refreshToken);

  // refreshToken을 쿠키에 넣어주기
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken: accessToken });
});

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  // 토큰을 request header에서 가져오기
  // Bearer xxxxxxx.xxxxxx.xxxxxx
  const authHeader = req.headers["authorization"];
  // 'Bearer' 뒤의 실제 토큰만 가져오기
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // 동등연산자가 아닌 일치연산자를 사용하면 403을 반환함

  // 토큰이 있으니 유효한 토큰인지 확인
  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // next 미들웨어에서 받아서 사용할 수 있도록 처리
    next();
  });
}

app.get("/refresh", (req, res) => {
  // console.log('req.cookies', req.cookies);
  // 쿠키 가져오기 cookie-parser
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401); // 1. 값이 있는지 검증

  const refreshToken = cookies.jwt;
  // refreshToken이 데이터베이스에 있는 토큰인지 확인
  if (!refreshToken.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  // token 이 유효한 토큰인지 확인
  jwt.verify(refreshToken, refreshSecretText, (err, user) => {
    // refreshToken verify
    if (err) return res.sendStatus(403); // 3. verify한 후 유요한 값인지 검증
    // accessToken을 생성하기
    const accessToken = jwt.sign(
      { name: user.name },
      secretText,
      { expiresIn: "30s" }
    ); // 다시 accessToken을 생성
    res.json({ accessToken }); // 새로 생성한 accessToken을 json으로 보냄
  });
});

app.listen(PORT, () => {
  console.log(`✅ listening on ${HOST}:${PORT}`);
});
