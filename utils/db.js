import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_FILE_NAME,
});

export async function initDB() {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.log('Database synchronization failed:', error.message);     
    }
}

export default sequelize;