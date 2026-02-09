const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Task 6 REST API Working Successfully");
});

// Get all users
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Rohan" }]);
});

// Add new user
app.post("/users", (req, res) => {
  const user = req.body;
  res.json({
    message: "User Added Successfully",
    user: user
  });
});

// Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
