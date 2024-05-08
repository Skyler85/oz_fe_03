const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
        default: 'https://res.cloudinary.com/dmovvyvc5/image/upload/v1714975336/user-2517433_640_kwvoai.png',
    }
})
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isValidatedPassword = async function (userSentPassword) {
    return await bcrypt.compare(userSentPassword, this.password);
}

userSchema.methods.getJwtToken = function() {
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
    })
}

const User = mongoose.model("User", userSchema);

module.exports = User;