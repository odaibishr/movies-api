import { body } from "express-validator";

export async function loginValidator() {
    return [
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Email is not valid'),

        body('password').notEmpty().withMessage('Password is required'),
    ]
}

export function registerValidator() {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Eamil is invalid'),
        body('password').notEmpty().withMessage('Password is required')
    ]
}