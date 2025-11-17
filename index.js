import express from 'express';
import morgan from 'morgan';
import { initDB } from './utils/db.js';

initDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Movies API' });
})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: 'Something went wrong' });
})



console.log(process.env.PORT);

app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`);
});