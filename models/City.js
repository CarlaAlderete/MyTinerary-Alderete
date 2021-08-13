const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    photo: {type: String, require:true},
    city: {type: String, require:true},
    country: {type: String, require:true},
    description: {type: String, require:true},
    photoDescription: {type: String, require:true},
    flag: {type: String, require:true}
})

const City = mongoose.model('city', citySchema)
module.exports = City