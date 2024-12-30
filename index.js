import express from "express";
var app = express();

// Simple request time logger
app.use((req, res, next) => {
  console.log(`A new request recieved at ${Date.now()}`);

  // This function call is very important. It tells that more processing is
  // required for the current request and is in the next middlware function
  // route handler.
  next();
});

app.get("/", (req, res) => {
  res.send("Root page");
});

app.get("/hello", (req, res) => {
  res.send("Hello world!");
});

app.post("/hello", (req, res) => {
  res.send("You just called the post metho at '/hello'!\n");
});

app.all("/test", (req, res) => {
  res.send("HTTP method doesn't have any effect on this route!");
});

app.get("/:id", (req, res) => {
  res.send(`The id you specified is ${req.params.id}`);
});

// both index.js and things.js should be in the same directory
import things from "./things.js";
app.use("/things", things);

// Other routes
app.get("*", (req, res) => {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(3000);
