"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const { PORT } = process.env;
const app = (0, express_1.default)();
const port = PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    let rawData = fs_1.default.readFileSync("./server/todoList.json", "utf-8");
    let todos = JSON.parse(rawData);
    res.send(todos);
});
app.post("/", (req, res) => {
    const task = req.body.task;
    console.log(task);
    // const jsonString = JSON.stringify(stuff);
    res.send(`Task "${task}" added`);
});
app.delete("/", (req, res) => {
    const idx = req.body.idx;
    res.send(`Task "${idx + 1}" deleted`);
});
app.patch("/", (req, res) => {
    const idx = req.body.idx;
    res.send(`Task "${idx + 1}" updated`);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
