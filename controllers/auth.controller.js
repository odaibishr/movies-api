import bcrypt from 'bcrypt';
import { User } from '../models/index.js';
import { generateToken } from '../utils/helpers.js';

export async function register(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
        res.status(400).json({
            message: "User already exists"
        });
        return;
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
        neme: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    const token = generateToken(newUser.id);

    res.status(201).json({
        token,
        user: {
            id: newUser.id,
            name: newUser.name
        }
    });
}