const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.find((course) => course.id === id);
  res.send(categoryCourse);
});

app.get("/courses/:category_id", (req, res) => {
  const id = req.params.category_id;
  const categoryCourses = courses.filter((course) => course.category_id === id);
  res.send(categoryCourses);
});

app.listen(port, () => console.log("Dragon News Server on port", port));

