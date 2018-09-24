const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM guias', (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}
// EL metodo query recibe 3 parametros:
// 1 la sentencia SQL
// 2 (solo si hay ? en la sentencia SQL) un array con los valores a sustituir en la query
// 3 Funcion anonima con el error y el resultado
exports.insert = ({ nombre, apellido, direccion, direccion_dos, comunidad, provincia, codigo_postal, mail, telefono, experiencia, biografia, foto}, done) => {
    db.get().query('INSERT INTO guias VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [null, nombre, apellido, direccion, direccion_dos, comunidad, provincia, codigo_postal, mail, telefono, experiencia, biografia, foto], (err, result) => {
        if (err) return done(err.message)
        done(null, result.insertId)
    })
}