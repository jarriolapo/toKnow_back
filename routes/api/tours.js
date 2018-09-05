var express = require('express');
var router = express.Router();
const modelTour = require('../../models/tour');

// http://localhost:3000/api/tours
router.get('/', (req, res) => {
    // res.send('API TOURS')
    modelTour.getAll((err, rows) => {
    res.json(rows)    
    })
})

//POST // http://localhost:3000/api/tours/resultado-busqueda
router.post('/resultado-busqueda', (req, res) => {
    console.log(req.body.categoria)
    console.log(req.body.ciudad)
    res.send('termina')
    // modelTour.send(req, (err, result) => {
    //     res.json()
    // })
})

//POST // http://localhost:3000/api/tours/create
router.post('/create', (req, res) => {
    console.log(req.body)
    // res.send('termina')
    modelTour.insert(req.body, (err, result) => {
        res.json(result)
    })
})

// http://localhost:3000/api/tours/4
router.get('/:idTour', (req, res) => {
    // console.log(req.params.idTour)
    // res.send('aqui')
    modelTour.getTourById(req.params.idTour, (err, rows) => {
        if (rows.length === 1) {
            res.json(rows[0])   
        } else {
            res.json({
                error:'NO EXISTE NINGUN Tour CON ESE ID'
            })
        }
    })
})






// http://localhost:3000/api/tours/ciudad
// router.get('/:ciudad', (req, res) => {
//             // console.log(req.params.ciudad)
//             // res.send('aqui termina')
//     modelTour.getByCiudad(req.params.ciudad, (err, row) => {
//             console.log(req.params.ciudad)
//             res.send('aqui termina')
//         if (rows.length === 1) {
//             res.json(rows[0]) 
//         } else {
//             res.json({
//                 error: 'NO EXISTE NINGUNA CIUDAD CON ESE ID'
//             })
//         }
//      })
// })






module.exports = router;