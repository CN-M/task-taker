import express from "express";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/controller";

const indexRouter = express.Router();

indexRouter
  .route("/")
  .get(getTasks)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask);

export default indexRouter;
