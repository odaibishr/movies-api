import { User } from "../models/index.js";
import bcrypt from 'bcrypt';

export async function createDefaultAdmin() {
    const admin = await User.findOne({
        where: { email: 'admin@gmail.com' }
    });

    if (!admin) {
        const hasedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        await User.create({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hasedPassword,
            isAdmin: true,
        });
    }
}