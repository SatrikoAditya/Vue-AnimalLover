const { User } = require('../models/')
const {generateToken} = require('../helpers/jwt')
const {comparePass} = require('../helpers/bcrypt')

class UserController {
    static register(req, res, next) {
        let {email, password} = req.body
        User.create({
            email, password
        })   
        .then(data => {
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }

    static login(req, res, next) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then(data => {
            if(!data) {
                throw {name: 'LOGIN_FAILED'}
            } else {
                let comparePassword = comparePass(password, data.password)
                if(!comparePassword) {
                    throw {name: 'LOGIN_FAILED'}
                } else {
                    let payload = {
                        id: data.id,
                        email: data.email
                    }
                    let access_token = generateToken(payload) 
                    res.status(200).json({
                        id: data.id,
                        email: data.email,
                        access_token
                    })
                }
            }
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = UserController