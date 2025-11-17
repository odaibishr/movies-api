import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import { asyncHandler } from '../utils/helpers.js';

const router = express.Router();

router.post('/register', asyncHandler(authController.register));

export default router;