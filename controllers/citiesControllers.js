const City = require('../models/City')

const citiesControllers = {
    getAllCities : async (req, res)=>{
        try {
            var cities = await City.find()
            res.json({success: true, res:cities})
        }catch (err){
            res.json({success:false, res: err.message})
        }
    },
    getOneCity : async (req, res)=>{
        try {
            var city = await City.findOne({_id:req.params.id})
            if(city){
                res.json({success: true, res:city})
            }else{
                throw new Error()
            }
        }catch{
            res.json({success:false, res:'The place you are looking for does not exist'})
        }
    },

    addNewCity : async (req, res)=>{
        const cityNew = new City ({...req.body})
        try{
            await cityNew.save()
            res.json({success: true, res:cityNew})
        }catch(err){
            res.json({ success: false, res:err.message})
        }
    },
    
    removeCity: async (req, res)=>{
        try{
            var cityDelete = await City.findOneAndDelete({_id : req.params.id})
            if(cityDelete){
                res.json({success: true, res: cityDelete})
            }else{
                throw new Error()
            }
        }catch(err){
            res.json({success: false, res:err.message})
        }
    },

    changeCity: async (req, res)=>{
        try{
            var changedCity = await City.findOneAndUpdate({_id : req.params.id}, {...req.body}, {new:true})
            if(changedCity){
                res.json({success : true, res:changedCity})
            }else{
                throw new Error()
            } 
        }catch(err){
            res.json({success: false, res:err.message})
        }
    }
}

module.exports = citiesControllers