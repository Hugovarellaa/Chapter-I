const express = require('express');
const route = express.Router();


route.get('/', (request, response) => {
  return (
    response.render("index")
  )
})
route.get('/room', (request, response) => {
  return (
    response.render("room")
  )
})
route.get('/create-pass', (resquest, response) => {
  return (
    response.render("create-pass")
  )
})

module.exports = route