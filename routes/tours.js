var express = require('express');
var router = express.Router();
const modelTour = require('../models/tour');


//DEVUELVE BUSQUEDA TOURS POR CIUDAD Y CATEGORIA
router.post('/resultado-busqueda', (req, res) => {
    // req.body recibe los parametros a la peticion POST
    // req.param recibe los parametros  dimanicoas de la URL /:id
     console.log(req.body)
    modelTour.insert(req.body, (err, result) => {
        res.redirect('./index')
    })    
})




//MUESTRA ID (DETALLE) Tour
router.get('/:idTour', (req, res) => {
    modelTour.getTourById(req.params.idTour,(err, rows) => {
        if(err) console.log(err)
        console.log(rows[0])
        res.render('tours/show', {
            tour: rows[0]
        })
    })
})

//MOSTRARA ID DEL Tour
// router.get('/:idTour', (req, res) => {
//     modelTour.getTourById(req.params.idtour(err, rows) => {
//         res.render('alumnos/:idTour', {
//             //     if(rows.length> 0){
//             //     res.json(row)
//             //     } else{
//             //         tours: rows[0]
//             //     })
//              })
//         })
//     })





module.exports = router;