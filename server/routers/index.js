const router = require('express').Router()
const userRouter = require('./userRouter')
const animalRouter = require('./animalRouter')

router.use('/', userRouter)
router.use('/animals', animalRouter)

module.exports = router