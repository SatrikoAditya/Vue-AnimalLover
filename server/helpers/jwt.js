const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(access_token) {
    return new Promise((resolve, reject) => {
        jwt.verify(access_token, process.env.SECRET, (err, decoded) => {
            if(err) {
                reject ({name: 'INVALID_TOKEN'})
            } else {
                resolve (decoded)
            }
        })
    })
}

module.exports = {generateToken, verifyToken}