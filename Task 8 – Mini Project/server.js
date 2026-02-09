const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

// Home Page
app.get("/", (req, res) => {

  let list = students.map((s, i) =>
    `<li>${s} <a href="/delete/${i}">Delete</a></li>`
  ).join("");

  res.send(`
    <h2>Task 8 - Mini Project (CRUD App)</h2>

    <form action="/add" method="POST">
      <input type="text" name="student" placeholder="Enter student name" required/>
      <button>Add</button>
    </form>

    <h3>Students</h3>
    <ul>${list}</ul>
  `);
});

// Add Student
app.post("/add", (req,res)=>{
  students.push(req.body.student);
  res.redirect("/");
});

// Delete Student
app.get("/delete/:id",(req,res)=>{
  students.splice(req.params.id,1);
  res.redirect("/");
});

app.listen(PORT, ()=>{
  console.log("Task 8 running at http://localhost:3000");
});
