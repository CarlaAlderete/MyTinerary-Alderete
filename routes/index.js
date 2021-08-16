const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router.route('/cities')
.get(citiesControllers.showCities)
.post(citiesControllers.addNewCities)

router.route('/city/:id')
.get(citiesControllers.showCity)
.delete(citiesControllers.removeCity)
.put(citiesControllers.changeCity)

module.exports = router