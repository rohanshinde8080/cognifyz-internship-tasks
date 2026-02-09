const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary in-memory users
let users = [];

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <h2>Task 7 - Authentication System</h2>

    <h3>Register</h3>
    <form action="/register" method="POST">
      <input type="text" name="username" placeholder="Enter username" required />
      <br><br>
      <input type="password" name="password" placeholder="Enter password" required />
      <br><br>
      <button type="submit">Register</button>
    </form>

    <hr>

    <h3>Login</h3>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Enter username" required />
      <br><br>
      <input type="password" name="password" placeholder="Enter password" required />
      <br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Register Route
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({ username, password });

  res.send(`
    <h3>Registration Successful</h3>
    <a href="/">Go Back</a>
  `);
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.send(`<h2>Login Successful! Welcome ${username}</h2>`);
  } else {
    res.send(`<h2>Invalid Username or Password</h2><a href="/">Go Back</a>`);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
