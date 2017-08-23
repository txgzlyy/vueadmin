const express = require('express')
const router = express.Router()

let User = require('../models/user')


let userInfos;
router.use((req,res,next)=>{
	userInfos = {
		type: 0,
        mesages: '',
        userInfo:{}
   };
   next();
})

router.post('/login', (req,res) => {
    //console.log(req.body)        // { username: 'admin', passworld: 123456 }
    User.findOne({
        username : req.body.username,
        passworld : req.body.passworld
    }).then((userInfo)=>{
        if(userInfo){
            userInfos.userInfo = userInfo
            res.json(userInfos)
            return;
        } else{
            userInfos.type = 1;
            userInfos.mesages = '账号不存在或密码错误！';
            res.json(userInfos)
        } 

    })
})

router.post('/zhce', (req,res) => {
    User.findOne({
        username : req.body.username,
        passworld : req.body.passworld
    }).then((userInfo)=>{
        if(userInfo){
            userInfos.type = 2;
            userInfos.mesages = '该账号已存在！';
            res.json(userInfos)
            return;
        }else{
            if(req.body.passworld == req.body.repassworld){
                userInfos.mesages = '注册成功！';
                res.json(userInfos)
                let user = new User({
                    username : req.body.username,
                    passworld : req.body.passworld
                })
                return user.save()
            }else{
                userInfos.type = 3;
                userInfos.mesages = '两次密码不一致';
                res.json(userInfos)
                return
            }
        }  
    })
})

router.post('/admin', (req,res) => {
    res.json(userInfos)
})

module.exports = router