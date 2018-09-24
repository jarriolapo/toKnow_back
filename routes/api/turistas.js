var express = require('express');
var router = express.Router();
const modelTurista = require('../../models/turista');

// http://localhost:3000/api/turistas
router.get('/', (req, res) => {
    // res.send('API GUIAS')
    modelTurista.getAll((err, rows) => {
    res.json(rows)    
    })
})

//POST // http://localhost:3000/api/turistas/create
router.post('/create', (req, res) => {
    console.log(req.body)
    //res.send('termina')
    modelTurista.insert(req.body, (err, rows) => {
        if(err) console.log(err)
        res.json(rows)
    })
})

//POST // http://localhost:3000/api/turistas/iniciar
router.post('/iniciar', (req, res) => {
    console.log(req.body.formulario.mail)
    let mail = req.body.formulario.mail
    let password = req.body.formulario.password
    modelTurista.getByMailPassword( mail, password,(err, rows)=> {
        if (err) console.log(err)
        console.log(rows)
        res.json(rows)
    })
    //res.send('termina')
    // SELECT contra table usuarios pasandole el username
    // Si existe usuario, compruebas password
    // modelTurista.select(req.body, (err, rows) => {
     // if(err) console.log(err)
    //     res.json(rows)
    // })
})

module.exports = router;
