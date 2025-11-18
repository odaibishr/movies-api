import express from 'express';
import morgan from 'morgan';
import { initDB } from './utils/db.js';
import authRouter from './routes/auth.route.js';
import moviesRouter from './routes/movies.routes.js';
import reviewsRouter from './routes/reviews.routes.js';
import watchListRouter from './routes/watchlist.routes.js';
import { createDefaultAdmin } from './utils/admin.js';

initDB().then(() => {
    createDefaultAdmin();
});

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Movies API' });
})

app.use('/api/auth', authRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/watchlist', watchListRouter);

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