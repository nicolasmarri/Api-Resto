const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./db.conection');

const user = require('./user/user.controller');
const product = require('./product/product.controller');
const login = require('./login/login.controller');
const order = require('./order/order.controller');
const auth = require('./auth/auth');
const app = express();
app.use(bodyParser.json());

app.use('/api', login);
app.post('/api/user', async (req, res) => {
    const { user, email, password, name, phone, address } = req.body;

    if (!email || !password || !user || !name) {
        res.status = 404;
        return res.send({ error: 'user, email, name and password are required' });
    }
    try {
        const insertUser = 'INSERT INTO users (id, user, name, email, phone, address, password, rol) VALUES (?,?,?,?,?,?,?,?);';
        await dbConnection.query(insertUser,
            { replacements: [Math.floor(Math.random() * 10000000), user, name, email, phone, address, password, 'user'] });
        return res.send(200).json({ status: 'user created' });
    } catch {
        res.status = 500;
        return res.send({ error: 'database error' });
    }
});
app.use(auth);
app.use('/api', user);
app.use('/api', order);
app.use('/api', product);

module.exports = app;