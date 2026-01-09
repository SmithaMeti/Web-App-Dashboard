import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user }).sort("-createdAt");
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user
  });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
