const express = require('express');
const questionController = require('./controllers/question-controller');
const RoomController = require('./controllers/RoomController')

const route = express.Router();

route.get('/', (request, response) => response.render('index', {page: 'enter-room'}))
route.get('/create-pass', (request, response) => response.render('index' , {page: 'create-pass'}))

route.get('/room/:room', (request, response) => response.render('room.ejs'))

route.post('/question/:room/:question/:action' , questionController.index)
route.post('/create-room', RoomController.create)

module.exports = route


