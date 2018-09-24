const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM turistas', (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}
// EL metodo query recibe 3 parametros:
// 1 la sentencia SQL
// 2 (solo si hay ? en la sentencia SQL) un array con los valores a sustituir en la query
// 3 Funcion anonima con el error y el resultado
exports.insert = ({nombre, mail, password}, done) => {
    db.get().query('INSERT INTO turistas (nombre, mail, password) VALUES (?, ?, ?)', [nombre, mail, password], (err, result) => {
        if (err) return done(err.message)
        done(null, result.insertId)
    })
}

///ESTE TRAE MAIL Y PASSWORD
exports.getByMailPassword = (mail, password, done) => {
    db.get().query('SELECT * FROM turistas WHERE mail=? AND password=?', [mail, password], (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}



//ESTO POSTEA TODOS LOS CAMPOS
// exports.insert = ({nombre, apellido, ciudad, pais, mail, cumpleanos, password}, done) => {
//     db.get().query('INSERT INTO turistas VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [null, nombre, apellido, ciudad, pais, mail, cumpleanos, password], (err, result) => {
//         if (err) return done(err.message)
//         done(null, result.insertId)
//     })
// }