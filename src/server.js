const express = require('express');
const path = require('path');
const server = express();
const route = require('./route');

server.set('view engine', 'ejs');
server.use(express.static('public'))
server.set('views', path.join(path.join(__dirname, 'views')))
server.use(express.urlencoded({ extended: true }))
server.use(route)

server.listen(3000, () => {
  return (
    console.log('Rodando com sucesso')
  )
})