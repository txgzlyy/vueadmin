const express = require('express')
const router = express.Router()

let User = require('../models/user')

let userInfos;

router.post('/login', (req,res) => {
    //console.log(req.body)        // { username: 'admin', passworld: 123456 }
    User.findOne({
        username : req.body.username,
        passworld : req.body.passworld
    }).then((userInfo)=>{
        if(userInfo){
            userInfos = userInfo
            res.json(userInfos)
            return;
        }  
        let user = new User({
            username : req.body.username,
            passworld : req.body.passworld
        })
        return user.save()
    })
})

router.post('/admin', (req,res) => {
    res.json(userInfos)
})

module.exports = router