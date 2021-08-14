const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    photo: {type: String, required:true},
    city: {type: String, required:true},
    country: {type: String, required:true},
    description: {type: String, required:true},
    photoDescription: {type: String, required:true},
    flag: {type: String}
})

const City = mongoose.model('city', citySchema)
module.exports = City