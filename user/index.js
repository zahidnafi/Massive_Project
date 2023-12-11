const express = require('express')
const User = require('./models/user')
const { jwtSign } = require('./helpers')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/register', (req, res) => {
    User.registerUser(req.body, (err, result) => {
        if (err) res.status(500).json(err)
        else res.status(201).json('Succes create account')
    })
})

app.post('/login', (req, res) => {
    User.loginUser(req.body, (err, result) => {
        if (err) res.status(500).json(err)
        else {
            const access_token = jwtSign({id: result.id})
            res.status(200).json({access_token})
        }
    })
})

app.listen(3000)
