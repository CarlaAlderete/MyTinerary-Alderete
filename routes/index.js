const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')

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

router.route('/itinerary/:id')
.delete(itinerariesControllers.removeItinerary)
.put(itinerariesControllers.changeOneItinerary)
.get(itinerariesControllers.getOneItineraryById)

module.exports = router