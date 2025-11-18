import express from 'express';
import * as whachListController from '../controllers/watchlist.controller.js';
import { asyncHandler } from '../utils/helpers.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/:movieId',
    authenticateUser,
    asyncHandler(whachListController.addToWatchList)
);

router.get('/',
    authenticateUser,
    asyncHandler(whachListController.getWatchList)
);

export default router;