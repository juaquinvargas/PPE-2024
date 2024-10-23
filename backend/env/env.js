const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bxhypivkwe74snklfgom-mysql.services.clever-cloud.com',
    user: 'ulcpwbfz2wjy7qlf',
    password: '9501Eb9jMqgs6tkMLysm',
    database: 'bxhypivkwe74snklfgom',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;