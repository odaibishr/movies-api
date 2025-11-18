import express from 'express';
import * as moviesController from '../controllers/movies.controller.js';
import { asyncHandler } from '../utils/helpers.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { authenticateAdmin } from '../middlewares/admin.middleware.js';
import { createOrUpdateMovieValidator } from '../validators/movie.validator.js';
import { validateRequest } from '../middlewares/validator.middleware.js';

const router = express.Router();

router.get('/', asyncHandler(moviesController.getAllMovies));

router.get('/:id', asyncHandler(moviesController.getMovie));

router.post('/',
    createOrUpdateMovieValidator(),
    validateRequest,
    authenticateUser,
    asyncHandler(authenticateAdmin),
    asyncHandler(moviesController.createMovie)
);

router.put('/:id',
    createOrUpdateMovieValidator(),
    validateRequest,
    authenticateUser,
    asyncHandler(authenticateAdmin),
    asyncHandler(moviesController.updateMovie)
);

router.delete('/:id',
    authenticateUser,
    asyncHandler(authenticateAdmin),
    asyncHandler(moviesController.deleteMovie),
);

export default router;