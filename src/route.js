const express = require('express');
const route = express.Router();


route.get('/', (request, response) => {
  return (
    response.render("index")
  )
})

module.exports = route