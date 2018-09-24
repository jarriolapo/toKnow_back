var express = require('express');
var router = express.Router();
const modelTurista = require('../models/turista');


router.post('/create', (req, res) => {
    // req.body recibe los parametros a la peticion POST
    // req.param recibe los parametros  dimanicoas de la URL /:id
     console.log(req.body)
    modelTurista.insert(req.body, (err, result) => {
        res.redirect('./index')
    })    
})


//DEVUELVE BUSQUEDA mail y password
router.post('/iniciar', (req, res) => {
    // req.body recibe los parametros a la peticion POST
    // req.param recibe los parametros  dimanicoas de la URL /:id
     console.log(req.body)
    modelTurista.insert(req.body, (err, result) => {
        res.redirect('./index')
    })    
})

