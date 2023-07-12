// "use strict";
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
// 	class User extends Model {
// 		/**
// 		 * Helper method for defining associations.
// 		 * This method is not a part of Sequelize lifecycle.
// 		 * The `models/index` file will call this method automatically.
// 		 */
// 		static associate(models) {
// 			// define association here
// 		}
// 	}
// 	User.init(
// 		{
// 			firstName: DataTypes.STRING,
// 			lastName: DataTypes.STRING,
// 			email: DataTypes.STRING,
// 			username: DataTypes.STRING,
// 			password: DataTypes.STRING,
// 			image: DataTypes.STRING,
// 		},
// 		{
// 			sequelize,
// 			modelName: "User",
// 		}
// 	);

// 	return User;
// };

// //const User = require('../models/User')
// //binds the models to user variable
'use strict';
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

    User.beforeSave(async (user) => {
      if (user.changed('password')) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      }
    });
  return User;
};