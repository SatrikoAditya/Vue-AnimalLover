const { Favorite } = require('../models/')

function authorization(req, res, next) {
    const {id} = req.params
    Favorite.findAll({
        where: {
            id
        },
        attributes: ['id', 'userId', 'animalId', 'createdAt', 'updatedAt']
    })
    .then(data => {
        if(!data) {
            console.log(data)
            throw {name: 'DATA_NOT_FOUND'}
        } else if(data.userId === req.loginUser.id) {
            next()
        } else {
            console.log(data)
            throw {name: 'AUTHORIZATION_FAILED'}
        }
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
}

module.exports = authorization