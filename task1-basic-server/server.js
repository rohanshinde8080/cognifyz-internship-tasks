const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Form submit
app.post("/submit", (req, res) => {
  const name = req.body.username;
  res.send(`Hello ${name}, form submitted successfully!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
