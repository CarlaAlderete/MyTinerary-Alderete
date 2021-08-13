const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router.route('/cities')
.get(citiesControllers.showCities)
.post(citiesControllers.addNewCities)

router.route('/cities/:id')
.get(citiesControllers.showCity)
.delete(citiesControllers.removeCity)

module.exports = router