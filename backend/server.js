const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todoapp")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const Todo = require("./models/Todo");

// Routes
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
