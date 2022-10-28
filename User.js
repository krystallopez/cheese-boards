/// This is the user model
//one to many between User and Board
// User will have name which is a string and email which is a string

const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// Creating the User Model
const User = sequelize.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = {
  User,
};
