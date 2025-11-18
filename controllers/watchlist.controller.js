import { WatchList } from "../models/index.js";

export async function addToWatchList(req, res) {
    const existingMovie = await WatchList.findOne({
        where: {
            userId: req.user.id,
            movieId: +req.params.movieId,
        },
    });

    if (existingMovie) {
        return res.status(400).json({
            message: "Movie already in watchlist",
        });
    }

    const newWatchListItem = await WatchList.create({
        userId: req.user.id,
        movieId: +req.params.movieId,
    });

    res.status(201).json(newWatchListItem);
}