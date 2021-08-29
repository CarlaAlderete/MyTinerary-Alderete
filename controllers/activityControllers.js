const Activity = require('../models/Activity')

const activityControllers={
    addNewActivity:async(req,res)=>{
        let newActivity= new Activity({...req.body})
        try{
            await newActivity.save()
            res.json({success:true, res:newActivity})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    getActivitiesByItinerary:async(req,res)=>{
        try{
            let activities = await Activity.find({itineraryId: req.params.id})
            res.json({success:true, res:activities})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    }
}
module.exports= activityControllers