//test for index file
const { DESCRIBE } = require("sequelize/types/query-types");
const { sequelize } = require("./db");
const { User } = require("./models/index");
const { seedUser } = require("./seedData");

//starting test file

describe("User Model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("can create a User", async () => {
    const user1 = await User.create(seeUser[0]);
    expect(user1.name).toEqual("Krystal");
  });
});
