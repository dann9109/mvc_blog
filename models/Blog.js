const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');

class Blog extends Model { }

Blog.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },


        release_date: {
            type: DataTypes.DATE
        }
    },
    {
        // Connection to our db
        sequelize,
        modelName: 'blog'
    }
);

// Blog.associate = (models) => {
//   Blog.belongsTo(models.User, {
//     foreignKey: 'userId',
//     as: 'user',
//   });
// };

module.exports = Blog;