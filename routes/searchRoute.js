const express = require('express');
const Router = new express.Router();

Router.get("/search", (req, res) => {
  res.render("index.ejs");
})

Router.get("/search/:search_query", (req, res) => {
  const search_query = req.params.search_query;
  res.render("search.ejs", {search_query});
})


module.exports = Router;