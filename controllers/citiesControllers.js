const City = require('../models/City')

const citiesControllers = {
    showCities : async (req, res)=>{
        try {
            var cities = await City.find()
            res.json({success: true, res:cities})
        }catch (err){
            res.json({success:false, res: err.message})
        }
    },
    showCity : async (req, res)=>{
        try {
            var city = await City.findOne({_id:req.params.id})
            if(city){
                res.json({success: true, res:city})
            }else{
                res.json({success: false, res:city})
            }
        }catch (err){
            res.json({success:false, res:err.message})
        }
    },

    addNewCities : async (req, res)=>{
        const cityNew = new City ({
            photo: req.body.photo,
            city: req.body.city,
            country: req.body.country,
            description: req.body.description,
            photoDescription: req.body.photoDescription,
            flag: req.body.flag
        })
        try{
            await cityNew.save()
            res.json({success: true})
        }catch(err){
            res.json({ success: false, res:err.message})
        }
    },
    
    removeCity: async (req, res)=>{
        try{
            var cityDelete = await City.findOneAndDelete({_id : req.params.id})
            res.json({success: true, res: cityDelete})
        }catch(err){
            res.json({success: false, res:err.message})
        }
    },

    changeCity: async (req, res)=>{
        try{
            var changedCity = await City.findOneAndUpdate({_id : req.params.id}, {...req.body})
            res.json({success : true, res: changedCity})
        }catch(err){
            res.json({success: false, res:err.message})
        }
    }

}

module.exports = citiesControllers