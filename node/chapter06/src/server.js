const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { default: mongoose, plugin } = require("mongoose");
const app = express();
const path = require("path");

const config = require('config');
const serverConfig = config.get('server');

const mainRouter = require("../router/main.router");
const usersRouter = require("../router/users.router");

require('dotenv').config();

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

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('mongoDB connected');
    })
    .catch(err => {
        console.log(err);
    })

app.use('/static', express.static(path.join(__dirname, "public")));





app.use('/',mainRouter);
app.use('/auth', usersRouter);



const HOST = serverConfig.host;
const PORT = serverConfig.port;
app.listen(PORT, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
})