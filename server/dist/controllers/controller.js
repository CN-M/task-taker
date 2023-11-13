"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const fs_1 = __importDefault(require("fs"));
// GET All Tasks // POST
const getTasks = async (req, res, next) => {
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let tasks = JSON.parse(rawData);
    fs_1.default.readFile("./server/todoList.json", "utf-8", (err, data) => {
        let rawData = data;
        console.log(rawData);
        res.status(200).json(tasks);
    });
};
exports.getTasks = getTasks;
// Create Task // POST
const createTask = async (req, res, next) => {
    const task = req.body.task;
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let tasks = JSON.parse(rawData);
    tasks.push({
        task: task,
        completed: false,
    });
    fs_1.default.writeFileSync("server/todoList.json", JSON.stringify(tasks));
    res.status(200).json(tasks);
};
exports.createTask = createTask;
// UPDATE Task Status // PATCH
const updateTask = async (req, res, next) => {
    const idx = req.body.idx;
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let tasks = JSON.parse(rawData);
    if (tasks[idx].completed === true) {
        tasks[idx].completed = false;
    }
    else {
        tasks[idx].completed = true;
    }
    fs_1.default.writeFileSync("server/todoList.json", JSON.stringify(tasks));
    res.status(200).json(tasks);
};
exports.updateTask = updateTask;
// DELETE A Task // DELETE
const deleteTask = async (req, res, next) => {
    const idx = req.body.idx;
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let tasks = JSON.parse(rawData);
    tasks.splice(idx, 1);
    fs_1.default.writeFileSync("server/todoList.json", JSON.stringify(tasks));
    res.status(200).json(tasks);
};
exports.deleteTask = deleteTask;
