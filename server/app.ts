import cors from "cors";
import dotenv from "dotenv";
import createError from "http-errors";

import express, { Express, Request } from "express";
dotenv.config();

const { PORT } = process.env;

import indexRouter from "./routes/index";

const app: Express = express();
const port = PORT || 3000;

// Middleware
app.use(cors<Request>());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error Handler

app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
