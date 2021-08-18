const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true},
    photo:{type:String, required:true},
    description:{type:String, required:true},
    user:{type:Object,required:true},
    info:{type:Array,required:true},
    hashtag:{type:Array,required:true},
    commentary:{type:Array}
})

const Itinerary = mongoose.model('itinerary',itinerarySchema)
module.exports = Itinerary