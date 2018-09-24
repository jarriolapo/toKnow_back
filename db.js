//SE REQUIERE EL MYSQL
const mysql = require('mysql')

//CREAMOS UNA VARIABLE Y LA INICIALIZAMOS EN NULL
let pool = null

//CON EXPORT PUEDO ACCDER A ESTAS FUNCIONES DESDE AFUERA 
//ESTA ES MI BBDD LOCAL
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
       
// mysql://b013c55e46180b:0d13b9b6@eu-cdbr-west-02.cleardb.net/heroku_f71146009388978?reconnect=true


//ESTA ES MI BBDD PROVICIONAL EN HEROKU MIA
// exports.connect = (done) => {
//     pool = mysql.createPool({
//     host: 'eu-cdbr-west-02.cleardb.net',
//     user: 'b013c55e46180b',
//     password: '0d13b9b6',
//     database: 'heroku_f71146009388978',
//     port:3306
//     })
//     done()
// }


//ESTA ES MI BBDD PROVICIONAL EN HEROKU MARIO
// exports.connect = (done) => {
//     pool = mysql.createPool({
//     host: 'eu-cdbr-west-02.cleardb.net',
//     user: 'bc98861819afa8',
//     password: '37b4811a',
//     database: 'heroku_b5b45e98e7b2de8',
//     port:3306
//     })
//     done()
// }


exports.get = () => {
 return pool   
}