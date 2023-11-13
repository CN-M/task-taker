"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const indexRouter = express_1.default.Router();
indexRouter
    .route("/")
    .get(controller_1.getTasks)
    .post(controller_1.createTask)
    .patch(controller_1.updateTask)
    .delete(controller_1.deleteTask);
exports.default = indexRouter;
