import { Movie } from "../models/index.js";

export async function createMovie(req, res) {
    const newMovie = await Movie.create({
        name: req.body.name,
        genre: req.body.genre,
        relaseDate: req.body.relaseDate,
    });

    res.status(201).json(newMovie);
}