const dbConnection = require('../db.conection')
const express = require('express')
const router = express.Router()

router.put('/user/:id', async (req, res) => {
        const id = req.params.id;
        if (req.user.rol !== 'admin') return res(401).send({ error: 'Unauthorized' });
        const { rol } = req.body;
        try {
                await dbConnection.query(`UPDATE users SET rol = ? WHERE id = ?;`, { replacements: [rol, id] });
                return res.send({ status: 'rol updated' });
        } catch (error) {
                res.status(500).json(error, 'Database error')
        }
})

router.delete('/user/:id', async (req, res) => {
        const id = req.params.id;
        if (req.user.rol === 'admin' && req.user.id === id) return res.status(404).send({ error: 'user not granted' });
        if (req.user.rol !== 'admin') {
                return res.status(401).send({error: 'user not granted'})
        }
        try {
                await dbConnection.query(`delete from users where id = ${id}`);
                return res.json({ status: 'user deleted' });
        } catch {
                return res.status(500).json(error, 'Database error')
        }

})



module.exports = router