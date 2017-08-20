let mongoose = require('mongoose')

let schemaUser = require('../schemas/user')

module.exports = mongoose.model('User',schemaUser)