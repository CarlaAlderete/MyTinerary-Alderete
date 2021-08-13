const City = require('../models/City')

const citiesControllers = {
    showCities : (req, res)=>{
        City.find()
        .then((cities)=> res.json({ res: cities }))
        .catch((err) => console.log(err))
    },
    showCity : (req, res)=>{
        City.findOne({_id : req.params.id})
        .then((city)=> res.json({res : city}))
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
        cityNew
         .save()
         .then(() => res.json({ success: true }))
         .catch((err) => res.json({ success: false, error: err }))
    },
    
    removeCity: (req, res)=>{
     City.findOneAndDelete({_id : req.params.id})
     .then(()=> res.json({success: true}))  
    },
}

module.exports = citiesControllers