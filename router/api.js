const express = require('express')
const router = express.Router()

let User = require('../models/user')

let userInfo = {
    username: 'admin',
    passworld: 123456
}

router.get('/login', (req,res) => {
    console.log(req)
    // User.findOne({
    //    // username :
    // })

    res.json(userInfo)
})

module.exports = router