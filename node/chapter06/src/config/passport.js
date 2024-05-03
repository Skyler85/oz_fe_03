const passport = require("passport");
const User = require("../models/users.model");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
require('dotenv').config()

// req.login(user)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// client => session => request
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user); // req.user = user;
    });
});

const localStrategyConfig = new LocalStrategy({ usernameField: "email", passwordField: "password" }, (email, password, done) => {
    User.findOne({ email: email.toLocaleLowerCase() })
        .then((user) => {
            if (!user) {
                return done(null, false, { msg: `Email ${email} not found` });
            }

            user.comparePassword(password, (err, isMatch) => {
                if (err) return done(err);

                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { msg: `Invalid email or password.` });
            });
        })
        .catch((err) => done(err));
});

// 구글 로그인 구현
const googleStrategyConfig = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["email", "profile"],
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log('profile', profile);
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    return done(null, existingUser);
                }
                const user = new User();
                user.email = profile.emails[0].value;
                user.googleId = profile.id;
                user.save()
                    .then(() => done(null, user))
                    .catch((err) => done(err));
            })
            .catch((err) => done(err));
    }
);

// 카카오 로그인 구현
const kakaoStrategyConfig = new KakaoStrategy(
    {
        clientID: process.env.KAKAO_CLIENT_ID,
        callbackURL: process.env.KAKAO_REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log('profile', profile);
        User.findOne({ kakaoId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    return done(null, existingUser);
                }
                const user = new User();
                user.kakaoId = profile.id;
                user.email = profile._json.kakao_account.email;
                user.save()
                    .then(() => done(null, user))
                    .catch((err) => done(err));
            })
            .catch((err) => done(err));
    }
);

passport.use("local", localStrategyConfig);
passport.use("google", googleStrategyConfig);
passport.use("kakao", kakaoStrategyConfig);
