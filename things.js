import express from "express";
var router = express.Router();

router.get("/", (req, res) => {
  res.send("GET route on things.");
});

router.post("/", (req, res) => {
  res.send("POST route on things.");
});

router.get("/:name/:id", (req, res) => {
  res.send(`id: ${req.params.id} and name: ${req.params.name}`);
});

router.get("/:id([0-9]{5})", (req, res) => {
  res.send(`id: ${req.params.id}`);
});

// export this router to use in index.js
export default router;
