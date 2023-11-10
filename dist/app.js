"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const { PORT } = process.env;
const app = (0, express_1.default)();
const port = PORT || 3000;
app.get('/', (req, res) => {
    const msg = req.query.msg;
    const name = req.query.name;
    const age = req.query.age;
    console.log(msg);
    console.log(name);
    console.log(age);
    res.json({
        message: "Hello Guys!"
    });
});
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
});
