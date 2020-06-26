const express = require('express');
const Router = new express.Router();

Router.get("/", (req, res) => {
  res.render("index.ejs");
});

Router.get("*", (req, res) => {
  res.render("404.ejs");
});

module.exports = Router;