const express = require("express");

const route = express.Router();

const questionControllers = require("./controllers/QuestionController");
const roomController = require("./controllers/RoomController");

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/room/:room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

route.post("/question/:room/:question/:action", questionControllers.index);
route.post("/create-room", roomController.create);

module.exports = route;
