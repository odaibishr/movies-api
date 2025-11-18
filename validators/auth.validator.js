import { body } from "express-validator";

export async function loginValidator() {
    return [
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Email is not valid'),

        body('password').notEmpty().withMessage('Password is required'),
    ]
}