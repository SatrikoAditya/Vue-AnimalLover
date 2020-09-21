const router = require('express').Router()
const AnimalController = require('../controllers/AnimalController')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/', AnimalController.findAll)

module.exports = router