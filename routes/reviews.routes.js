import express from 'express';
import * as reviewsController from '../controllers/reviews.controller.js';
import { asyncHandler } from '../utils/helpers.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { reviewMovieValidator } from '../validators/review.validator.js';
import { validateRequest } from '../middlewares/validator.middleware.js';

const router = express.Router();

router.post('/:movieId',
    reviewMovieValidator(),
    validateRequest,
    authenticateUser,
    asyncHandler(reviewsController.createReview)
);

router.get('/:movieId',
    asyncHandler(reviewsController.getReviewsForMovie)
);

export default router;