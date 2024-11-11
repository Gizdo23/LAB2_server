import express from 'express';
import path from 'path';
import { handleCheckboxClick,parseText } from './routes';
import cors from 'cors';
import DOMPurify from 'dompurify';


const app = express()

app.use(cors({
  origin: 'http://localhost:3001' 
}));


app.use(cors());

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../view', 'index.html'));
    res.render('index');
  });

app.set('views', path.join(__dirname, '../view'));  
app.use(express.static(path.join(__dirname, '../view')));
app.use(express.static(path.join(__dirname, '../dist')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

app.post('/checkbox-clicked', handleCheckboxClick)

app.post('/parse-text', parseText)

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});