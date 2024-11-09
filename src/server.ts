import express from 'express';
import path from 'path';

// Create an instance of an Express app
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
  });

app.use(express.static(path.join(__dirname, '../view')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});