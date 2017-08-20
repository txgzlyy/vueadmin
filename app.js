const pkg = require('./package')
const config = require('./config/db')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const rouIndex = require('./router/index')
const rouApi = require('./router/api')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',rouIndex)
app.use('/api',rouApi)


mongoose.connect(config.mongodb,(err)=>{
  if(err) {
		console.log('数据库连接失败！');
	} else {
    console.log('数据库连接成功');
		app.listen(port, () => {
      console.log(`${pkg.name} listening on port ${port}`)
    })
	}
})
mongoose.Promise = global.Promise



module.exports = app