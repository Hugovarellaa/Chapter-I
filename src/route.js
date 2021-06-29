const express = require('express');
const route = express.Router();

route.get('/', (request, response) => response.render('index.ejs'))
route.get('/room', (request, response) => response.render('room.ejs'))
route.get('/create-pass', (request, response) => response.render('create-pass'))

module.exports = route