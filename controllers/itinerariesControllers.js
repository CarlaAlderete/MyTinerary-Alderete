const Itinerary = require('../models/Itineray')

const itinerariesControllers ={
    getAllItineraries: async(req, res)=>{
        try{
            let allItineraries = await Itinerary.find()
            res.json({success:true, res:allItineraries})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    getItinerariesByCity: async(req, res)=>{
        try{
            let itineraries = await Itinerary.find({cityId:req.params.id})
            res.json({success:true, res:itineraries})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    getOneItineraryById:async(req,res)=>{
        try{
            let itinerary = await Itinerary.findOne({_id:req.params.id})
            if(itinerary){
                res.json({success:true, res:itinerary})
            }else{
                throw new Error()
            }
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    addNewItinerary: async(req,res)=>{
        let newItinerary = new Itinerary({...req.body})
        try{
            await newItinerary.save()
            res.json({success:true, res:newItinerary})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    removeItinerary: async(req, res)=>{
        try{
            let itineraryRemove = await Itinerary.findOneAndDelete({_id : req.params.id})
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
            let changedItinerary = await Itinerary.findOneAndUpdate({_id: req.params.id},{...req.body},{new:true})
            if(changedItinerary){
                res.json({success:true, res:changedItinerary})
            }else{
                throw new Error()
            }
        }catch(err){
            res.json({success:false, res: err.message})
        }
    },
    changeOneItineraryLike:async(req,res)=>{
        try{
            let userLike=await Itinerary.findOne({_id: req.params.id, like:req.user._id})
            if(userLike){
                let changedItineraryLike = await Itinerary.findOneAndUpdate({_id: req.params.id},{$pull:{like:req.user._id}},{new:true})
                res.json({success:true, res:changedItineraryLike})
            }else{
                let changedItineraryLike = await Itinerary.findOneAndUpdate({_id: req.params.id},{$push:{like:req.user._id}},{new:true})
                res.json({success:true, res:changedItineraryLike})
            }
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    addComment:async(req,res)=>{
        try{
            let newComment=await Itinerary.findOneAndUpdate({_id: req.params.id},{$push:{comments:{userId:req.user._id, text:req.body.text}}},{new:true}).populate('comments.userId')
            res.json({success:true, res:newComment.comments})
        }catch(err){
            res.jon({success:false, res:err.message})
        }
    }
}
module.exports= itinerariesControllers