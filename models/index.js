// Define relationships here

//One User can have many Boards

//Cheese can be on multiple Boards

//Board can have multiple Cheeses

const { User } = require("./User.js");
const { Board } = require("./Boards.js");
const { Cheese } = require("./Cheese.js");

module.exports = {
  User,
  Board,
  Cheese,
};
