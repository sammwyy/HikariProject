// Import modules
const express = require("express");
const path = require("path");

// Singletones
const app = express();

// Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// RestAPI
app.use(require("./routes/apiSearch.js"));

// Routes
app.use(require("./routes/searchRoute.js"));
app.use(require("./routes/indexRoute.js"));

// listen server
app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + process.env.PORT);
});