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
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Routes
app.use("/", index_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
