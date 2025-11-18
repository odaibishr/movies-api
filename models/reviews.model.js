import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";

const Review = sequelize.define('reviews', {
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

Review.associate = (models) => {
    Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
    });

    Review.belongsTo(models.Movie, {
        foreignKey: 'movieId',
        as: 'movie'
    });
}

export { Review };