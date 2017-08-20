let mongoose = require('mongoose')

let schema = new mongoose.Schema({
    username : String,
    passworld: String,
    isAdmin:{
        type: Boolean,
        default: false
    }
})

module.exports = schema