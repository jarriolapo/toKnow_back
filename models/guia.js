const db = require('../db')
//ESTE FICHERO TIENE TODAS LAS FUNCIONES PARA TRABAJAR CON LA TABLA ALUMNOS

exports.getAll = (done) => {
    db.get().query('SELECT * FROM guias', (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}