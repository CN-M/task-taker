"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const { PORT } = process.env;
const app = (0, express_1.default)();
const port = PORT || 3000;
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json({
        message: "Hello Aliens!",
    });
});
app.get("/:username", (req, res) => {
    const username = req.params.username;
    res.send(username);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
