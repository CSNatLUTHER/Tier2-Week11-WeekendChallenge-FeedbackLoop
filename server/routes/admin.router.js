const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/admin');
    res.send({note:'admin router working'})
    // pool.query('SELECT * from "<table>";').then((result) => {
    //     res.send(result.rows);
    // }).catch((error) => {
    //     console.log('Error GET /api/admin', error)
    //     res.sendStatus(500);
    // });
})

module.exports = router;