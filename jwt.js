const jwt = require('jsonwebtoken');
const env = require('../environment')

function createToken(expiry, data) {
    const token = jwt.sign({ data: data }, env.jwtKey, {
        expiresIn: expiry // 30, '2d', 10h
    });
    return token
}

function verifyToken(token) {
    try {
        const tokenData = jwt.verify(token, env.jwtKey);
        data = tokenData.data;
    }
    catch (err) { throw err }
}