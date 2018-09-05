var express = require('express');
var router = express.Router();

let toursRouter = require('./api/tours')
let guiasRouter = require('./api/guias')

//ESTA LINEA GESTIONA TODAS LAS PETICIONES QUE SE RALIZAN SOBRE /api/tours
router.use('/tours', toursRouter)

//ESTA LINEA GESTIONA TODAS LAS PETICIONES QUE SE RALIZAN SOBRE /api/tours
router.use('/guias', guiasRouter)


module.exports = router;