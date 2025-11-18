import { body } from "express-validator";

export function reviewMovieValidator() {
    return [
        body('rating').notEmpty().withMessage('Rating is required'),
        body('text').notEmpty().withMessage('Text is required')
    ]
}