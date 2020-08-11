const express = require("express");

const db = require("../migrations/connection"); //>> connection - imports data from knexfile(database)

const router = express.Router();

//-------endpoints start here--------/

//-----------GET cars---------
router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

//---------POST / INSERT car---/
router.post("/", (req, res) => {
  const newCar = req.body;
  db("cars")
    .insert(newCar)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((error) => {
      console.log("POST/INSERT/ error:", error);
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
