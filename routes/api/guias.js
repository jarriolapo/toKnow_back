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

module.exports = router;
