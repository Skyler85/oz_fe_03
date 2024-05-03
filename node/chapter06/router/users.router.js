const express = require("express");
const usersRouter = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require("../middlewares/auth");
const passport = require("passport");


const User = require("../src/models/users.model");
require('nodemailer')
const sendMail = require("../src/mail/mail");

// 회원 로그인 페이지
usersRouter.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.log("로그인에 실패하였습니다.");
            return next(err);
        }
        if (!user) {
            console.log("등록된 유저가 없습니다.");
            return res.json({ msg: info });
        }

        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    })(req, res, next);
})

// 로그아웃
usersRouter.post("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) return next(err);
        res.redirect("/login");
    });
});

// 회원가입
usersRouter.post('/signup',async (req, res) => {
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
        //? send Email (*)
        sendMail(user.email,user.email,'welcome');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})

// 구글 로그인 요청
usersRouter.get("/google", passport.authenticate("google"));

usersRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        successReturnToOrRedirect: "/",
        failureRedirect: "/login",
    })
);

// 카카오 로그인 요청
usersRouter.get("/kakao", passport.authenticate("kakao"));

usersRouter.get(
    "/kakao/callback",
    passport.authenticate("kakao", {
        successReturnToOrRedirect: "/",
        failureRedirect: "/login",
    })
);

module.exports = usersRouter;
