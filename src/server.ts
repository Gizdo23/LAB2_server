import express from 'express';
import path from 'path';
import { handleCheckboxClick,parseText } from './routes';
import cors from 'cors';


const app = express()

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
  });

app.use(express.static(path.join(__dirname, '../view')));
app.use(express.static(path.join(__dirname, '../dist')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

app.post('/checkbox-clicked', handleCheckboxClick);

app.post('/parse-text', parseText)

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});