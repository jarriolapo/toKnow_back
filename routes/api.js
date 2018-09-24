var express = require('express');
var router = express.Router();

let toursRouter = require('./api/tours')
let guiasRouter = require('./api/guias')
let turistasRouter = require('./api/turistas')


//ESTA LINEA GESTIONA TODAS LAS PETICIONES QUE SE RALIZAN SOBRE /api/tours
router.use('/tours', toursRouter)

//ESTA LINEA GESTIONA TODAS LAS PETICIONES QUE SE RALIZAN SOBRE /api/guias
router.use('/guias', guiasRouter)

//ESTA LINEA GESTIONA TODAS LAS PETICIONES QUE SE RALIZAN SOBRE /api/turistas
router.use('/turistas', turistasRouter)


module.exports = router;