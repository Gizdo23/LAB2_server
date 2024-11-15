"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001'
}));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../view', 'index.html'));
    res.render('index');
});
app.set('views', path_1.default.join(__dirname, '../view'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../view')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});
app.post('/checkbox-clicked', routes_1.handleCheckboxClick);
app.post('/parse-text', routes_1.parseText);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});
