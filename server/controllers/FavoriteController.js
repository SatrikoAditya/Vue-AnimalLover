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
            next(err)
        })
    }

    static findAll(req, res, next) {
        // const userId = req.loginUser.id
        Favorite.findAll({
            include: [ Animal ]
        })
        .then(data => {
            let favorites = []
            data.forEach(f => {
                favorites.push({
                    id: f.id,
                    userId: f.userId,
                    animalId: f.animalId,
                    animal: {
                        id: f.Animal.id,
                        name: f.Animal.name,
                        imageUrl: f.Animal.imageUrl,
                        description: f.Animal.description
                    }
                })
            });
            res.status(200).json({favorites})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = FavoriteController