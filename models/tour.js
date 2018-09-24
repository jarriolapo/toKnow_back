const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM tours', (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}

//Tours POR id
exports.getTourById = (idTour, done) => {
    db.get().query('SELECT * FROM tours WHERE id=?', [idTour], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}

//ESTE TRAE CIUDAD 
exports.getByCiudad = (ciudad, done) => {
    db.get().query('SELECT ciudad  FROM tours WHERE ciudad=?', [ciudad], (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}



///ESTE TRAE CIUDAD Y CATEGORIA PERO YA VA
exports.getByCiudadCat = (ciudad, categoria, done) => {
    db.get().query('SELECT * FROM tours WHERE ciudad=? AND categoria=?', [ciudad, categoria], (err, rows) => {
        if (err) return done(err.message)
        done(null, rows)
    })
}

// EL metodo query recibe 3 parametros:
// 1 la sentencia SQL
// 2 (solo si hay ? en la sentencia SQL) un array con los valores a sustituir en la query
// 3 Funcion anonima con el error y el resultado
exports.insert = ({ titulo, categoria, duracion, pais, ciudad, des_corta, des_larga, hitos, precio, min_personas, max_personas, opiniones01, opiniones02, opiniones03, encuentro, direccion, consejos, idioma, hora, dias, temporada, fotos }, done) => {
    db.get().query('INSERT INTO tours VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [null, titulo, categoria, duracion, pais, ciudad, des_corta, des_larga, hitos, precio, min_personas, max_personas, opiniones01, opiniones02, opiniones03, encuentro, direccion, consejos, idioma, hora, dias, temporada, fotos], (err, result) => {
        if (err) return done(err.message)
        done(null, result.insertId)
    })
}