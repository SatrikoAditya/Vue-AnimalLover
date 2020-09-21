const router = require('express').Router()
const userRouter = require('./userRouter')
const animalRouter = require('./animalRouter')
const favoriteRouter = require('./favoriteRouter')

router.use('/', userRouter)
router.use('/animals', animalRouter)
router.use('/favorites', favoriteRouter)

module.exports = router