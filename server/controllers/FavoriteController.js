const { Favorite, Animal } = require('../models/')

class FavoriteController {
    static create(req, res, next) {
        const userId = req.loginUser.id
        const animalId = Number(req.params.animalId)
        Favorite.create({
            userId, animalId
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }

    static delete(req, res, next) {
        const {id} = req.params
        Favorite.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({message: 'Successfully delete favorite animal'})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }

    static findAll(req, res, next) {
        Favorite.findAll({
            include: [ Animal ]
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = FavoriteController