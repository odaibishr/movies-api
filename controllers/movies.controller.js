import { Movie } from "../models/index.js";

export async function createMovie(req, res) {
    const newMovie = await Movie.create({
        name: req.body.name,
        genre: req.body.genre,
        relaseDate: req.body.relaseDate,
    });

    res.status(201).json(newMovie);
}

export async function updateMovie(req, res) {
    const movie = await Movie.findByPk(req.params.id);

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found",
        });
    }

    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.relaseDate = req.body.relaseDate;

    await movie.save();

    res.status(200).json(movie);
}