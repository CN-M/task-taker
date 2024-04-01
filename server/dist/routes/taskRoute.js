"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const taskRouter = express_1.default.Router();
taskRouter
    .route("/")
    .get(taskController_1.getTasks)
    .post(taskController_1.createTask)
    .patch(taskController_1.updateTask)
    .delete(taskController_1.deleteTask);
exports.default = taskRouter;
