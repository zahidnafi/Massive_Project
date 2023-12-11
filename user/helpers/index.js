const jwt = require("jsonwebtoken")
const secret = 'rahasia' // kalo bisa di taro di ENV file

const jwtSign = (payload) => {
    return jwt.sign(payload, secret)
}

const jwtVerify = (token) => {
    return jwt.verify(token, secret)
}

module.exports = { jwtSign, jwtVerify }