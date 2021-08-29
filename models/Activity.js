const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    name:String,
    src:String,
    description:String,
    itineraryId:{type: mongoose.Types.ObjectId, ref: 'itinerary'}
})

const Activity = new mongoose.model('activity', ActivitySchema)
module.exports = Activity