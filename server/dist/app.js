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
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    let rawData = fs_1.default.readFileSync("/home/cnm/Projects/Main/Personal/express-server/server/todoList.json", "utf-8");
    let todos = JSON.parse(rawData);
    res.send(todos);
});
app.post("/", (req, res) => {
    const stuff = req.body;
    console.log(stuff);
    // const jsonString = JSON.stringify(stuff);
    res.status(200);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
