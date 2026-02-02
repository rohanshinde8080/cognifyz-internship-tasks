const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Temporary storage
let users = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// API - get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// API - add user
app.post("/api/users", (req, res) => {
  const name = req.body.name;

  if (!name || name.length < 3) {
    return res.status(400).json({ error: "Invalid name" });
  }

  users.push(name);
  res.json(users);
});

// Normal form submit
app.post("/submit", (req, res) => {
  const name = req.body.username;

  if (!name || name.length < 3) {
    return res.send("Invalid name");
  }

  users.push(name);

  res.send(`
    <h2>Success!</h2>
    <p>Name saved: ${name}</p>
    <p>All users: ${users.join(", ")}</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
