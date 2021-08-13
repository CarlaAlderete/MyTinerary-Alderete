const City = require('../models/City')

const citiesControllers = {
    showCities : async (req, res)=>{
        try {
            var cities = await City.find()
            res.json({res:cities})
        }catch (err){
            res.json({success:false, res:err.message})
        }
    },
    showCity : async (req, res)=>{
        try {
            var city = await City.findOne({_id:req.params.id})
            res.json({res:city})
        } catch (err){
            res.json({success:false, res:err.message})
        }
    },

    addNewCities : (req, res)=>{
        const cityNew = new City ({
            photo: req.body.photo,
            city: req.body.city,
            country: req.body.country,
            description: req.body.description,
            photoDescription: req.body.photoDescription,
            flag: req.body.flag
        })
        cityNew.save()
         .then(() => res.json({success: true}))
         .catch((err) => res.json({ success: false, error: err }))
    },
    
    removeCity: (req, res)=>{
        City.findOneAndDelete({_id : req.params.id})
        .then(()=> res.json({success: true}))  
    },

    changeCity: (req, res)=>{
        City.findOneAndUpdate({_id : req.params.id}, {...req.body})
        .then(()=> res.jon({success : true}))
        .catch((err) => res.json({sucess: false, error:err}))
    }

}

module.exports = citiesControllers