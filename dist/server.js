"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// Create an instance of an Express app
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../view', 'index.html'));
});
app.use(express_1.default.static(path_1.default.join(__dirname, '../view')));
// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});
// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
