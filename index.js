const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mysql = require('mysql');
const routes = require('./routes.js');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas de la API 
app.use('/', routes);

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});