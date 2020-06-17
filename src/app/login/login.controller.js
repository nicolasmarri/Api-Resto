const dbConnection = require('../db.conection')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../../config/server')

const sign = config.JWT.PRIVATE_KEY;
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users, _] = await dbConnection.query(`SELECT * from users where email = '${email}' and password = '${password}'`);
        if (!users.length) {
            res.status = 401;
            res.json({ error: 'invalid credentials' });
        } else {
            const token = jwt.sign(JSON.stringify(users[0]), sign);
            return res.json({ token });
        }
    } catch (e) {
        res.status = 500;
        res.json({ error: 'database error' });
    }
});


module.exports = router