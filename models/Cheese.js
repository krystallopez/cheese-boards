//This is the cheese model
// Cheese model will have title which is a string, description which is a string

const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// Creating the Cheese model
const Cheese = sequelize.define("cheese", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = { Cheese };
