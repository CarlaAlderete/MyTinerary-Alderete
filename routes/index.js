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
.get(itinerariesControllers.getAllItineraries)
.post(itinerariesControllers.addNewItinerary)

router.route('/itinerary/:id')
.delete(itinerariesControllers.removeItinerary)

module.exports = router