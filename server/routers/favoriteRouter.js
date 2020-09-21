const router = require('express').Router()
const FavoriteController = require('../controllers/FavoriteController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.get('/', FavoriteController.findAll)
router.post('/:animalId', FavoriteController.create)
router.delete('/:id', FavoriteController.delete)

module.exports = router