import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
dotenv.config();

const { PORT } = process.env;

const app: Express = express();
const port = PORT || 3000;

app.use(cors<Request>());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Aliens!",
  });
});

app.get("/:username", (req: Request, res: Response) => {
  const username = req.params.username;
  res.send(username);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
