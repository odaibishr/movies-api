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
        name: req.body.name,
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

export async function login(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
        return res.status(404).json({ message: "Email or password is worng" });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(404).json({ message: "Email or password is worng" });
    }

    const token = generateToken(user.id);

    res.status(200).json({
        token,
    });
}

export async function getCurrentUser(req, res) {
    const user = await User.findByPk(req.user.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.json({
        id: user.id,
        name: user.name,
        email: user.email,
    });
}