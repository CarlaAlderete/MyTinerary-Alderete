const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    lastName:String,
    mail:String,
    password:String,
    src:String,
    country:String
})

const User = mongoose.model('user', userSchema)
module.exports= User