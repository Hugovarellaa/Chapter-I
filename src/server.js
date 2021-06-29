const express = require('express');
const server = express();
const route = require('./route');

server.use(route)

server.listen(3000, () => {
  return (
    console.log('Rodando com sucesso')
  )
})