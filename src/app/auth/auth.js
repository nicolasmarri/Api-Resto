
const jwt = require('jsonwebtoken')
const config = require('../../config/server')
const sign = config.JWT.PRIVATE_KEY
const dbConnection = require('../db.conection')

const auth = async (req, res, next) => {
    try {
        const token = req.headers['access-token'];
        console.log('asd', req.headers['access-token'])
        if (!token) {
            res.status = 401;
            return res.send({ error: 'invalid credentials' });
        }
        const user = jwt.verify(token, sign);

        const [dbUser, _] = await dbConnection.query(`SELECT * from users where email = '${user.email}' and password = '${user.password}'`);
        req.user = dbUser[0];
        return next();
    } catch (error) {
        res.send({ error: 'invalid credentials' });
    }
}


module.exports = auth