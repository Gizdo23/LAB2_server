"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseText = exports.handleCheckboxClick = void 0;
// Define the handler for when the checkbox is clicked
const handleCheckboxClick = (req, res) => {
    console.log('Checkbox clicked!');
    res.send('Checkbox clicked! Check the server logs.');
};
exports.handleCheckboxClick = handleCheckboxClick;
const parseText = (req, res) => {
    const text = req.body.text;
    //console.log(text)
    res.send(text);
    //res.render('index', { message: text })
};
exports.parseText = parseText;
