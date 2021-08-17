const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router.route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.addNewCity)

router.route('/city/:id')
.get(citiesControllers.getOneCity)
.delete(citiesControllers.removeCity)
.put(citiesControllers.changeCity)

module.exports = router