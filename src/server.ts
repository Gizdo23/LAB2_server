import express from 'express';
import path from 'path';


const bodyParser = require('body-parser'); // To parse JSON in request bodies
const exampleController = require('app.js');

// Create an instance of an Express app
const app = express()

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
  });

app.use(express.static(path.join(__dirname, '../view')));
app.use(express.static(path.join(__dirname, '../dist')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

  require('./app.js');

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});