const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();
server.use(route);
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.static("public"));

server.listen(3333, () => console.log("Servidor rodando"));
