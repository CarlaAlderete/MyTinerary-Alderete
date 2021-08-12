const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router.route('/cities')
.get(citiesControllers.citiesGet)

router.route('/city/:id')
.get(citiesControllers.cityGet)

module.exports = router