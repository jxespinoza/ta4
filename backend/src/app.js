const express = require('express');
const cors = require('cors');
const server = express();

//Configuraciones
server.set('port',1337);

//Middlewares
server.use(cors());
server.use(express.json());



//Rutas
server.use('/', require('./routes/rutas'));


module.exports = server;
