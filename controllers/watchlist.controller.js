import { Movie, WatchList } from "../models/index.js";

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


export async function getWatchList(req, res) {
    const warchList = await WatchList.findAll({
        where: {
            userId: req.user.id,
        },
        include: [
            {
                model: Movie,
                as: 'movie',
                attributes: ['id', 'name', 'genre']
            },
        ]
    });

    res.json(warchList);
}

export async function removeFromWatchList(req, res) {
    await WatchList.destroy({
        where: {
            userId: req.user.id,
            movieId: +req.params.movieId,
        },
    });
        
    res.json({
        message: "Movie removed from watchlist",
    });
}