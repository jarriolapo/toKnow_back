var express = require('express');
var router = express.Router();
const modelGuia = require('../../models/guia');

// http://localhost:3000/api/guias
router.get('/', (req, res) => {
    // res.send('API GUIAS')
    modelGuia.getAll((err, rows) => {
    res.json(rows)    
    })
})

//POST // http://localhost:3000/api/guias/create
router.post('/create', (req, res) => {
    console.log(req.body)
    // res.send('termina')
    modelGuia.insert(req.body, (err, rows) => {
        if(err) console.log(err)
        res.json(rows)
    })
})

module.exports = router;
