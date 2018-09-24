var express = require('express');
var router = express.Router();
const modelGuia = require('../models/guia');


router.post('/create', (req, res) => {
    // req.body recibe los parametros a la peticion POST
    // req.param recibe los parametros  dimanicoas de la URL /:id
     console.log(req.body)
    modelGuia.insert(req.body, (err, result) => {
        res.redirect('./index')
    })    
})