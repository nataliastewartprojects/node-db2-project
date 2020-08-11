const express = require("express"); //imports express

const carsRouter = require("../api/cars-router.js");

const server = express(); //creates the server

server.use(express.json()); //middlware - reads JSON

server.use("/api/cars", carsRouter);

module.exports = server;
