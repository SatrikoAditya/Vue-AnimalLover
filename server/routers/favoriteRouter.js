const router = require('express').Router()
const FavoriteController = require('../controllers/FavoriteController')
// const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// router.use(authentication)

router.post('/:animalId', FavoriteController.create)
router.delete('/:id', authorization, FavoriteController.delete)
router.get('/', FavoriteController.findAll)

module.exports = router