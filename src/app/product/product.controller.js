const dbConnection = require('../db.conection');
const sequelize = require('sequelize');
const express = require('express')
const router = express.Router()

router.get('/product', async (req, res) => {
        try {
                const products = await dbConnection.query('SELECT * FROM products', { type: sequelize.QueryTypes.SELECT });
                res.status(200).json(products);
        } catch (error) {
                res.status(500).json(error, 'Database error')
        }
})

router.post('/product', async (req, res) => {
        if (req.user.rol !== 'admin') return res(401).send({ error: 'Unauthorized' });
        try {
                const { description, price } = req.body;
                const inserProduct = 'INSERT INTO products (id, description, price) VALUES (?,?,?);';
                await dbConnection.query(inserProduct,
                        { replacements: [Math.floor(Math.random() * 10000000), description, price] });
                return res.json({ status: 'product created' });
        } catch (error) {
                res.status(500).json(error, 'Database error')
        }
})

router.put('/product/:id', async (req, res) => {
        const id = req.params.id;
        if (req.user.rol !== 'admin') return res(401).send({ error: 'Unauthorized' });
        const { description, price } = req.body;

        try {
                await dbConnection.query(`UPDATE products SET description = ?,  price = ? WHERE id = ?;`, { replacements: [description, price, id] });
                return res.send({ status: 'product updated' });
        } catch (error) {
                res.status(500).json(error, 'Database error')
        }
})

router.delete('/product/:id', async (req, res) => {
        const id = req.params.id;
        if (req.user.rol !== 'admin') return res.status(404).send({ error: 'Unauthorized' });

        try {
                await dbConnection.query(`delete from products where id = ${id}`);
                return res.json({ status: 'product deleted' });
        } catch {
                return res.status(500).json(error, 'Database error')
        }
})

module.exports = router