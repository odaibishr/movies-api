import { Review, User, Movie } from '../models/index.js';

export async function createReview(req, res) {
    const newReview = await Review.create({
        userId: req.user.id,
        movieId: +req.params.movieId,
        rating: req.body.rating,
        text: req.body.text,
    });

    res.status(201).json(newReview);
}

export async function getReviewsForMovie(req, res) {
    const reviews = await Review.findAll({
        where: { movieId: +req.params.movieId },
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name']
            },
            {
                model: Movie,
                as: 'movie',
                attributes: ['id', 'name']
            }
        ]
    });

    res.json(reviews);
}