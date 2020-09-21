const e = require('express');
const {verifyToken} = require('../helpers/jwt')
const { User } = require('../models/')

function authentication(req, res, next) {
    const {access_token} = req.headers
    let decodedTemp;
    if(!access_token) {
        throw {name: 'AUTHENTICATION_FAILED'}
    } else {
        verifyToken(access_token)
        .then(decoded => {
            decodedTemp = decoded
            return User.findOne({
                where: {
                    email: decoded.email
                }
            })
        })
        .then(data => {
            if(!data) {
                throw {name: 'AUTHENTICATION_FAILED'}
            } else {
                req.loginUser = decodedTemp
                next()
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = authentication