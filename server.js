const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("./recipes/recipes-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h2> Welcome to node-db4-project server! <h3>");
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong 🙁"
  });
});

module.exports = server;
