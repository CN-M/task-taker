"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const fs_1 = __importDefault(require("fs"));
const readData = () => {
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let tasks = JSON.parse(rawData);
    return tasks;
};
const writeData = (tasks) => {
    fs_1.default.writeFileSync("server/todoList.json", JSON.stringify(tasks));
};
// GET All Tasks // GET
const getTasks = async (req, res, next) => {
    const tasks = readData();
    res.status(200).json(tasks);
};
exports.getTasks = getTasks;
// Create Task // POST
const createTask = async (req, res, next) => {
    const { task } = req.body;
    const tasks = readData();
    tasks.push({
        task: task,
        completed: false,
    });
    writeData(tasks);
    res.status(200).json(tasks);
};
exports.createTask = createTask;
// UPDATE Task Status // PATCH
const updateTask = async (req, res, next) => {
    const { idx } = req.body;
    const tasks = readData();
    tasks[idx].completed = !tasks[idx].completed;
    writeData(tasks);
    res.status(200).json(tasks);
};
exports.updateTask = updateTask;
// DELETE A Task // DELETE
const deleteTask = async (req, res, next) => {
    const { idx } = req.body;
    const tasks = readData();
    tasks.splice(idx, 1);
    writeData(tasks);
    res.status(200).json(tasks);
};
exports.deleteTask = deleteTask;
