const express = require('express');

const questionController = require('./controllers/question-controller');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (request, response) => response.render('index', {page: 'enter-room'}))
route.get('/create-pass', (request, response) => response.render('index' , {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route
