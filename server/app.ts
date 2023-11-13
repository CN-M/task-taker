import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import fs from "fs";
import { Todo } from "./types";
dotenv.config();

const { PORT } = process.env;

const app: Express = express();
const port = PORT || 3000;

// Middleware
app.use(cors<Request>());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  let rawData = fs.readFileSync("./server/todoList.json", "utf-8");
  let todos: Todo[] = JSON.parse(rawData);

  res.send(todos);
});

app.post("/", (req: Request, res: Response) => {
  const task = req.body.task;
  console.log(task);
  // const jsonString = JSON.stringify(stuff);
  res.send(`Task "${task}" added`);
});

app.delete("/", (req: Request, res: Response) => {
  const idx = req.body.idx;

  res.send(`Task "${idx + 1}" deleted`);
});

app.patch("/", (req: Request, res: Response) => {
  const idx = req.body.idx;

  res.send(`Task "${idx + 1}" updated`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
