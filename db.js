const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdatabase'
});

// Conexion a la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos: ', error);
        return;
    }

    console.log('Conexión exitosa a la base de datos!');
});
  
module.exports = connection;