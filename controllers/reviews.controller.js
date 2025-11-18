import { Review } from '../models/index.js';

export async function createReview(req, res) {
    const newReview = await Review.create({
        userId: req.user.id,
        movieId: req.params.movieId,
        rating: req.body.rating,
        text: req.body.text,
    });

    res.status(201).json(newReview);
}