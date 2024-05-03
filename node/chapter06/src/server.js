const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { default: mongoose, plugin } = require("mongoose");
const app = express();
const path = require("path");
const User = require("./models/users.model");
const { checkAuthenticated, checkNotAuthenticated } = require("../middlewares/auth");
require('dotenv');

const cookieEncryptionKey = 'superSecretKey';
// 미들웨어 등록
app.use(cookieSession({
    keys: [cookieEncryptionKey] // 배열형태로 입력
}))

// register regenerate & save after the cookieSession middleware initialization
app.use(function(request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');


app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 전달하는 value를 받기위한 모듈

// view engine setup
app.set('views', path.join(__dirname, "views"));
app.set("view engine", 'ejs');

mongoose.connect(process.env.MONGO_DB_CONNECT)
    .then(() => {
        console.log('mongoDB connected');
    })
    .catch(err => {
        console.log(err);
    })

app.use('/static', express.static(path.join(__dirname, "public")));

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index');
})


// 회원 로그인 페이지
app.get('/login', checkNotAuthenticated, (req, res) => { res.render('login'); })
app.post('/login',(req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.log('로그인에 실패하였습니다.')
                return next(err);
            }
            if (!user) {
                console.log('등록된 유저가 없습니다.')
                return res.json({ msg: info});
            }

            req.logIn(user, function (err){
                if (err) { return next(err); }
                res.redirect('/');
            })
        })(req, res, next)
    })   
// 로그아웃
app.post('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) return next(err);
        res.redirect("/login");
    })
})


// 회원 가입 페이지
app.get('/signup', checkNotAuthenticated, (req, res) => {res.render('signup');})
app.post('/signup',async (req, res) => {
        // user 객체를 생성합니다.
        const user = new User(req.body);
        console.log(user);
        // {
        //     email: 'test7@example.com',
        //     password: '$2a$10$8RF2TLF4/8qhPH.jj0G8G.',
        //     _id: new ObjectId('66331a9a9c1196017370e68a')
        //   }
        try {
            // user 컬렉션에 유저를 저장합니다.
            await user.save();
            return res.status(200).json({
                success: true,
            })
        } catch (error) {
            console.log(error);
        }
    })

// 구글 로그인 요청
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/callback', passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
}))


const HOST = 'http://localhost'
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
})