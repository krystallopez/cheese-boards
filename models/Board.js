//This is the board model
// this will have type which will be a string, description which will be a string, and rating will be a number

const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// Creating the Board mode
const Board = sequelize.define("board", {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.INTEGER,
});

module.exports = { Board };
