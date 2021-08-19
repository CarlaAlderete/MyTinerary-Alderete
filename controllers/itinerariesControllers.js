const Itinerary = require('../models/Itineray')

const itinerariesControllers ={
    getAllItineraries: async(req, res)=>{
        try{
            var itineraries = await Itinerary.find()
            res.json({success:true, res:itineraries})
        }catch(err){
            res.json({success:false, res:err.message })
        }
    },
    addNewItinerary: async(req,res)=>{
        var newItinerary = new Itinerary({...req.body})
        try{
            await newItinerary.save()
            res.json({success:true, res:newItinerary})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    removeItinerary: async(req, res)=>{
        try{
            var itineraryRemove = await Itinerary.findOneAndDelete({_id : req.params.id})
            if(itineraryRemove){
                res.json({success:true, res:itineraryRemove})
            }else{
                throw new Error()
            }
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    changeOneItinerary: async(req,res)=>{
        try{
            var changedItinerary = Itinerary.findOneAndUpdate({_id: req.params.id},{...req.body},{new:true})
            if(changedItinerary){
                res.json({success:true, res:changedItinerary})
            }else{
                throw new Error()
            }
        }catch(err){
            res.json({success:false, res: err.message})
        }
    }
}

module.exports= itinerariesControllers