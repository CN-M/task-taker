import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request } from "express";
dotenv.config();

const { PORT } = process.env;

import indexRouter from "./routes/index";

const app: Express = express();
const port = PORT || 3000;

// Middleware
app.use(cors<Request>());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
