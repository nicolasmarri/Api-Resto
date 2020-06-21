const dbConnection = require('../db.conection')
const express = require('express')
const router = express.Router()

router.post('/order', async (req, res) => {
    const user = req.user;
    try {
        const { status, description, payment_method, address, product_id } = req.body
        const insertOrderQuery = 'INSERT INTO orders (id, status, time, description, payment_method, user_id, address, product_id) VALUES (?,?,?,?,?,?,?,?);';
        await dbConnection.query(insertOrderQuery,
            { replacements: [Math.floor(Math.random() * 10000000), status, new Date(), description, payment_method, user.id, address, product_id] });
        return res.status(200).json({ status: 'order created' });
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

router.put('/order/:id', async (req, res) => {
    const id = req.params.id;
    if (req.user.rol !== 'admin') return res.status(401).send({ error: 'Unauthorized' });
    const { status } = req.body;
    try {
        await dbConnection.query(`UPDATE orders SET status = ? WHERE id = ?;`, { replacements: [status, id] });
        return res.send({ status: 'order updated' });
    } catch (error) {
        return res.status(500).json(error, 'Database error')
    }
})

router.delete('/order/:id', async (req, res) => {
    const id = req.params.id
    if (req.user.rol !== 'admin') return res.status(401).send({ error: 'Unauthorized' });
    try {
        await dbConnection.query(`delete from orders where id = ${id}`);
        return res.send({ status: 'order deleted' });
    } catch (error) {
        return res.status(500).json(error, 'Database error')
    }
})

module.exports = router