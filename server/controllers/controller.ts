import express, { NextFunction, Request, Response } from "express";
import fs from "fs";

import { Todo } from "../types";

const indexRouter = express.Router();

// GET All Tasks // POST
export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let tasks: Todo[] = JSON.parse(rawData);

  res.status(200).json(tasks);
};

// Create Task // POST
export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const task = req.body.task;

  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let tasks: Todo[] = JSON.parse(rawData);

  tasks.push({
    task: task,
    completed: false,
  });

  fs.writeFileSync("server/todoList.json", JSON.stringify(tasks));

  res.status(200).json(tasks);
};

// UPDATE Task Status // PATCH
export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idx = req.body.idx;

  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let tasks: Todo[] = JSON.parse(rawData);

  if (tasks[idx].completed === true) {
    tasks[idx].completed = false;
  } else {
    tasks[idx].completed = true;
  }

  fs.writeFileSync("server/todoList.json", JSON.stringify(tasks));

  res.status(200).json(tasks);
};

// DELETE A Task // DELETE
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idx = req.body.idx;

  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let tasks: Todo[] = JSON.parse(rawData);

  tasks.splice(idx, 1);

  fs.writeFileSync("server/todoList.json", JSON.stringify(tasks));

  res.status(200).json(tasks);
};
