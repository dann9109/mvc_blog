const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');
const { hash, compare } = require('bcrypt');

const Recipe = require('./Recipe');

class User extends Model {
    toJSON() {
        const user = object.assign({}, this.get());

        delete user.password;

        return user;
    }

    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password);


        return is_valid;
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'That username already exists',
            },
            trim: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Username is required',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'A user with that email address already exists',
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'You must provide a valid email address',
                },
                notEmpty: {
                    args: true,
                    msg: 'Email is required',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Password is required',
                },
                len: {
                    args: 6,
                    msg: 'Password must be at least 6 characters long',
                },
            },
        },
    },
    {
        sequelize,
        modelName: 'user',
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10);


                return user;
            }
        }
    }


);
// Define the association
User.hasMany(Recipe, { foreignKey: 'userId' });
Recipe.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;
