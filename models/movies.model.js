import sequelize from '../utils/db.js';
import { DataTypes } from 'sequelize';


const Movie = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export { Movie };