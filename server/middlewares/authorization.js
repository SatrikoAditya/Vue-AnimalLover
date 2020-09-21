const { Favorite } = require('../models/')

function authorization(req, res, next) {
    const {id} = req.params
    Favorite.findByPk(id)
    .then(data => {
        if(!data) {
            throw {name: 'DATA_NOT_FOUND'}
        } else if(data.userId === req.loginUser.id) {
            next()
        } else {
            throw {name: 'AUTHORIZATION_FAILED'}
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization