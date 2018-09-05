//SE REQUIERE EL MYSQL
const mysql = require('mysql')

//CREAMOS UNA VARIABLE Y LA INICIALIZAMOS EN NULL
let pool = null

//CON EXPORT PUEDO ACCDER A ESTAS FUNCIONES DESDE AFUERA
exports.connect = (done) => {
    pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'toknow',
    port:8889
    })
    done()
}
exports.get = () => {
 return pool   
}