import { NextFunction, Request, Response } from "express";
import fs from "fs";

import { Todo } from "../types";

const readData = () => {
  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let tasks: Todo[] = JSON.parse(rawData);
  return tasks;
};

const writeData = (tasks: Todo[]) => {
  fs.writeFileSync("server/todoList.json", JSON.stringify(tasks));
};

// GET All Tasks // GET
export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tasks = readData();

  res.status(200).json(tasks);
};

// Create Task // POST
export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { task } = req.body;

  const tasks = readData();

  tasks.push({
    task: task,
    completed: false,
  });

  writeData(tasks);

  res.status(200).json(tasks);
};

// UPDATE Task Status // PATCH
export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idx } = req.body;

  const tasks = readData();

  tasks[idx].completed = !tasks[idx].completed;

  writeData(tasks);

  res.status(200).json(tasks);
};

// DELETE A Task // DELETE
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idx } = req.body;
  const tasks = readData();

  tasks.splice(idx, 1);

  writeData(tasks);

  res.status(200).json(tasks);
};
