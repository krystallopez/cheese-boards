// Define relationships here

//One User can have many Boards

//Cheese can be on multiple Boards

//Board can have multiple Cheeses
// const { sequelize } = require("../db");
// const { Sequelize } = require("sequelize");

const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");

//associations
User.hasMany(Board);
// Board.belongsTo(User);

Cheese.belongsToMany(Board, { through: "cheese_board" });
Board.belongsToMany(Cheese, { through: "cheese_board" });

module.exports = { User, Board, Cheese };
