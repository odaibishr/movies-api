import { body } from "express-validator";

export function createOrUpdateMovieValidator() {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('genre').notEmpty().withMessage('Genre is required'),
        body('releaseDate').notEmpty().withMessage('Release Date is required')
    ]
}