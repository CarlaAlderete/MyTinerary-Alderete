const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true},
    photo:{type:String, required:true},
    description:{type:String, required:true},
    user:{
        name:{type:String, required:true},
        photo:{type:String, required:true}
    },
    info:{
        price:{type:Number,required:true},
        time:{type:Number,required:true},
        hashtag:{type:Array,required:true}
    },
    like:{type:Array,required:true},
    cityId:{type: mongoose.Types.ObjectId, ref: 'city'},
    commentary:{type:Array}
})

const Itinerary = mongoose.model('itinerary',itinerarySchema)
module.exports = Itinerary