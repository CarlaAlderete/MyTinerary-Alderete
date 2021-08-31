const express = require('express')
const router = express.Router()
const passport= require('passport')
const validator = require('../controllers/validator')
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')
const activityControllers = require('../controllers/activityControllers')

router.route('/cities')
.get(citiesControllers.getAllCities)
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
.put(passport.authenticate('jwt',{session:false}), itinerariesControllers.changeOneItineraryLike)

router.route('/itinerary/:id')
.delete(itinerariesControllers.removeItinerary)
.put(itinerariesControllers.changeOneItinerary)
.get(itinerariesControllers.getOneItineraryById)

router.route('/itinerary/comment/:id')
.post(passport.authenticate('jwt',{session:false}), itinerariesControllers.addComment)

router.route('/user/signup')
.post(validator, userControllers.addNewUser)

router.route('/user/signin')
.post(userControllers.singInUser)
.get(passport.authenticate('jwt',{session:false}), userControllers.forcedSignIn)

router.route('/activity')
.post(activityControllers.addNewActivity)

router.route('/activities/:id')
.get(activityControllers.getActivitiesByItinerary)

module.exports = router