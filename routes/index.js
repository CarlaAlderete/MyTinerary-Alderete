const express = require('express')
const router = express.Router()
const passport= require('passport')
const validator = require('../controllers/validator')
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')

router.route('/cities')
.get(passport.authenticate('jwt',{session:false}),citiesControllers.getAllCities)
.post(citiesControllers.addNewCity)

router.route('/city/:id')
.get(citiesControllers.getOneCity)
.delete(citiesControllers.removeCity)
.put(citiesControllers.changeCity)

router.route('/itineraries')
.post(itinerariesControllers.addNewItinerary)
.get(itinerariesControllers.getAllItineraries)

router.route('/itineraries/:id')
.get(itinerariesControllers.getItinerariesByCity)

router.route('/itinerary/:id')
.delete(itinerariesControllers.removeItinerary)
.put(itinerariesControllers.changeOneItinerary)
.get(itinerariesControllers.getOneItineraryById)

router.route('/user/signup')
.post(validator, userControllers.addNewUser)

router.route('/user/signin')
.post(userControllers.singInUser)

module.exports = router