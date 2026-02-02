const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// temporary storage
let users = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const name = req.body.username;

  // server-side validation
  if (!name || name.length < 3) {
    return res.send("Error: Name must be at least 3 characters long");
  }

  // store data temporarily
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
