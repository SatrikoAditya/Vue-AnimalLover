const { Animal } = require('../models/')

class AnimalController {
    static findAll(req, res, next) {
        Animal.findAll()
        .then(animals => {
            res.status(200).json({animals})
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = AnimalController