const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    res.send({note:'feedback router working'})
    // pool.query('SELECT * from "<table>";').then((result) => {
    //     res.send(result.rows);
    // }).catch((error) => {
    //     console.log('Error GET /api/feedback', error)
    //     res.sendStatus(500);
    // });
})

router.post('/', (req, res) => {
    console.log('in feedback post route with:', req.body);
    let queryString = `INSERT INTO "feedback" ("feeling", "content", "support", "comments")
                       VALUES ( $1, $2, $3, $4 )`;
    let values = [ req.body.feelings, req.body.content, req.body.support, req.body.comments ]
    pool.query( queryString, values ).then( (response) => {
        res.sendStatus(201);
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    });
})

module.exports = router;