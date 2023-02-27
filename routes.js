const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
    res.send('¡Bienvenido al API!');
});

// Conseguir datos de los usuarios
router.get('/users', (req, res) => {
  db.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// Conseguir datos de tabla principal
router.get('/datos', (req, res) => {
  db.query('SELECT * FROM datos', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// Endpoint para iniciar sesión
router.post('/login', (req, res) => {
  const { email, contraseña } = req.body;

  // Verificar si el usuario existe en la base de datos
  const query = `SELECT * FROM usuarios WHERE email = '${email}' AND password = '${contraseña}'`;
  db.query(query, (error, results) => {
    if (error) {
      console.log('Error al buscar usuario en la base de datos: ', error);
      res.status(500).send('Ocurrió un error al buscar el usuario en la base de datos');
    } else if (results.length === 0) {
      // Si no se encontró el usuario, enviar un mensaje de error
      res.status(401).send('Credenciales inválidas');
    } else {
      // Si el usuario existe, enviar un mensaje de éxito
      res.status(200).send('Inicio de sesión exitoso');
    }
  });
});


// EndPoint para verificar que permisos tiene el usuario
router.post('/getuserdata', (req, res) => {
  const {token} = req.body;

  const query = `SELECT * FROM usuarios WHERE email = '${token}'`;
  db.query(query, (err, results) => {
    if (err){
      console.log('error:', err);
      res.status(500).send('Ocurrio un error')
    } else {
      res.status(200).send({rol:results[0].rol, username: results[0].nombre})
    }
  })
})

// Acciones CRUD /////////////////

// Borrar fila seleccionada
router.delete('/datos/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM datos WHERE id = ' + id;
    
    db.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error al borrar los datos.');
        } else {
            res.status(200).send(`Los datos con ID ${id} han sido borrados.`);
        }
    });
});

// Crear una fila en la tabla datos
router.post('/datos', (req, res) => {
    // Obtener los datos de la petición
    const { 
        descripcion, 
        fecha, 
        binario, 
        hora, 
        seleccion_multiple, 
        multiseleccion, 
        ubicacion, 
        numero, 
        precio 
    } = req.body;
  
    // Insertar la nueva fila en la tabla datos
    const query = `INSERT INTO datos 
    SET descripcion = '${descripcion}', 
    fecha = '${fecha}', 
    binario = '${binario}', 
    hora = '${hora}', 
    seleccion_multiple = '${seleccion_multiple}', 
    multiseleccion = '${multiseleccion}', 
    ubicacion = '${ubicacion}', 
    numero = '${numero}', 
    precio = '${precio}'`;
    db.query(query, (error, results, fields) => {
      if (error) {
        res.status(500).send({ message: error });
      } else {
        res.status(201).send({ message: 'Datos insertados correctamente.' });
      }
    });
  });

// Modificar una fila en la tabla datos
router.put('/datos', (req, res) => {
  // Obtener los datos de la petición
  const {
      id, 
      descripcion, 
      fecha, 
      binario, 
      hora, 
      seleccion_multiple, 
      multiseleccion, 
      ubicacion, 
      numero, 
      precio 
  } = req.body;

  // Insertar la nueva fila en la tabla datos
  const query = `UPDATE datos SET descripcion = 
  '${descripcion}', 
  fecha = '${fecha}', 
  binario = '${binario}', 
  hora = '${hora}', 
  seleccion_multiple = 
  '${seleccion_multiple}', 
  multiseleccion = '${multiseleccion}', 
  ubicacion = '${ubicacion}', 
  numero = '${numero}', 
  precio = '${precio}' 
  WHERE id = '${id}'`;
  db.query(query, (error, results, fields) => {
    if (error) {
      res.status(500).send({ message: error });
    } else {
      res.status(200).send({ message: 'Datos modificados correctamente.' });
    }
  });
});

//Eliminar una fila en la base de datos
router.delete('/datos/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM datos WHERE id = ${id}`;

  db.query(query, (error, results, fields) => {
    if (error) {
      res.status(500).send({ message: error });
    } else {
      res.status(200).send({ message: 'Datos eliminados correctamente.' });
    }
  }) 
})

module.exports = router;