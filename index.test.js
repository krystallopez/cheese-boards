//test for index file
//const { DESCRIBE } = require("sequelize/types/query-types");
const { sequelize } = require("./db");
const { User } = require("./models/index");
const { seedUser } = require("./seedData");

//starting test file

describe("User Model", () => {
  beforeAll(async () => {
    // 'sync' method will create the tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a User", async () => {
    const user = await User.create(seedUser[0]);
    expect(user.name).toEqual("Krystal");
    expect(user.email).toEqual("krystal@test.com");
  });
});
