import express from "express";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController";

const taskRouter = express.Router();

taskRouter
  .route("/")
  .get(getTasks)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask);

export default taskRouter;
