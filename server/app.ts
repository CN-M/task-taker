import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import fs from "fs";

import { Todo } from "./types";

dotenv.config();

const { PORT } = process.env;

const app: Express = express();
const port = PORT || 3000;

app.use(cors<Request>());

app.get("/", (req: Request, res: Response) => {
  let rawData = fs.readFileSync(
    "/home/cnm/Projects/Main/Personal/express-server/server/todoList.json",
    "utf-8"
  );
  let todos: Todo[] = JSON.parse(rawData);

  res.send(todos);
});

app.post("/", (req: Request, res: Response) => {
  const stuff = req.body;
  console.log(stuff);
  // const jsonString = JSON.stringify(stuff);

  res.status(200);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
