//test for index file
//const { DESCRIBE } = require("sequelize/types/query-types");
const { sequelize } = require("../db");
const { User, Board, Cheese } = require("../models/index");
const { seedUser, seedBoard, seedCheese } = require("../seedData");

//starting test file

describe("User Model", () => {
  beforeAll(async () => {
    // 'sync' method will create the tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await sequelize.sync({ force: true });
  });

  // C- Create an instance of the model
  test("can create a User", async () => {
    const user = await User.create(seedUser[0]);
    const user2 = await User.create(seedUser[1]);
    expect(user.name).toEqual("Krystal");
    expect(user.email).toEqual("krystal@test.com");
    expect(user2.name).toEqual("Penny");
    expect(user2.email).toEqual("piratepengwen@test.com");
  });

  test("can create a cheeseboard", async () => {
    const board = await Board.create(seedBoard[0]);
    const board2 = await Board.create(seedBoard[1]);
    expect(board.type).toEqual("French Cheese Board");
    expect(board.description).toEqual(
      "This cheese board contains a variety of cheese from France"
    );
    expect(board.rating).toEqual(7);
    expect(board2.type).toEqual("Italian Cheese Board");
    expect(board2.description).toEqual(
      "This cheese board contains a variety of cheese from Italy"
    );
    expect(board2.rating).toEqual(10);
  });

  test("Can create a cheese", async () => {
    const cheese = await Cheese.create(seedCheese[0]);
    const cheese2 = await Cheese.create(seedCheese[1]);
    const cheese3 = await Cheese.create(seedCheese[2]);
    const cheese4 = await Cheese.create(seedCheese[3]);
    expect(cheese.title).toEqual("Camembert");
    expect(cheese.description).toEqual(
      "Camembert is one of the first cheeses we associated with France, so it's no wonder it tops the list at number one. This cheese hails from Normandy, the northwestern tip of France where plentiful rain, gentle sun, and humidity produce the nutritious grass on which the Normandy cows feed."
    );
    expect(cheese2.title).toEqual("Munster");
    expect(cheese2.description).toEqual(
      "Not for the faint of heart, this pungent cheese is famous for its strong odor and its soft, smooth interior, with a consistency almost like melting chocolate. The brick-red rind reveals a golden, barely sweet, and slightly sticky interior. In its native regions, the cheese is tamed by serving it with potatoes and cumin. Made on either side of the Vosges mountains, in Alsace it's called Munster while in Lorraine it's known as Gerome. In 1978, an AOC was given to Munster-Gerome, uniting the two cheeses."
    );

    expect(cheese3.title).toEqual("Mozzarella");
    expect(cheese3.description).toEqual(
      "One of the better-known types of Italian cheese, mozzarella actually refers to a couple of different types of cheese, but it specifically refers to cheese which has usually been made from Italian buffalo milk and made using a spinning and cutting technique known as ‘pasta filata’."
    );

    expect(cheese4.title).toEqual("Parmigiano-Reggiano");
    expect(cheese4.description).toEqual(
      "You may know this cheese better as ‘Parmesan’, which is the name given to the same cheese which has been made outside of a defined area in Northern Italy.Parmigiano-Reggiano is the real deal, produced in Parma, Reggio Emilia, Modena and parts of Bologna and Mantua and is known for its flaky texture and rich flavour and it’s also been referred to as the ‘King of Cheeses’!"
    );
  });

  // R- read all items
  test("can find a user", async () => {
    const foundUser = await User.findAll();
    expect(foundUser[0].name).toEqual("Krystal");
    expect(foundUser[1].name).toEqual("Penny");
  });

  test("can find a board", async () => {
    const findBoard = await Board.findAll();
    expect(findBoard[0].type).toEqual("French Cheese Board");
    expect(findBoard[0].description).toEqual(
      "This cheese board contains a variety of cheese from France"
    );
    expect(findBoard[0].rating).toEqual(7);
    expect(findBoard[1].type).toEqual("Italian Cheese Board");
    expect(findBoard[1].description).toEqual(
      "This cheese board contains a variety of cheese from Italy"
    );
    expect(findBoard[1].rating).toEqual(10);
  });

  test("can find a cheese", async () => {
    const findCheese = await Cheese.findAll();
    expect(findCheese[0].title).toEqual("Camembert");
    expect(findCheese[0].description).toEqual(
      "Camembert is one of the first cheeses we associated with France, so it's no wonder it tops the list at number one. This cheese hails from Normandy, the northwestern tip of France where plentiful rain, gentle sun, and humidity produce the nutritious grass on which the Normandy cows feed."
    );
    expect(findCheese[1].title).toEqual("Munster");
    expect(findCheese[1].description).toEqual(
      "Not for the faint of heart, this pungent cheese is famous for its strong odor and its soft, smooth interior, with a consistency almost like melting chocolate. The brick-red rind reveals a golden, barely sweet, and slightly sticky interior. In its native regions, the cheese is tamed by serving it with potatoes and cumin. Made on either side of the Vosges mountains, in Alsace it's called Munster while in Lorraine it's known as Gerome. In 1978, an AOC was given to Munster-Gerome, uniting the two cheeses."
    );
    expect(findCheese[2].title).toEqual("Mozzarella");
    expect(findCheese[2].description).toEqual(
      "One of the better-known types of Italian cheese, mozzarella actually refers to a couple of different types of cheese, but it specifically refers to cheese which has usually been made from Italian buffalo milk and made using a spinning and cutting technique known as ‘pasta filata’."
    );
    expect(findCheese[3].title).toEqual("Parmigiano-Reggiano");
    expect(findCheese[3].description).toEqual(
      "You may know this cheese better as ‘Parmesan’, which is the name given to the same cheese which has been made outside of a defined area in Northern Italy.Parmigiano-Reggiano is the real deal, produced in Parma, Reggio Emilia, Modena and parts of Bologna and Mantua and is known for its flaky texture and rich flavour and it’s also been referred to as the ‘King of Cheeses’!"
    );
  });

  // U - Updating model instances
  test("updating the user", async () => {
    const userFound = await User.findAll();
    const updateUser = await userFound[0].update({ name: "Amanda" });
    const updateEmail = await userFound[0].update({ email: "amanda@test.com" });
    expect(updateUser.name).toBe("Amanda");
    expect(updateEmail.email).toBe("amanda@test.com");
  });

  test("can update a board", async () => {
    const boardFound = await Board.findAll();
    const updateType = await boardFound[0].update({
      type: "British Cheese Board",
    });
    const updateScript = await boardFound[0].update({
      description:
        "This is a cheese board that contains a variety of British cheese.",
    });
    const updateRating = await boardFound[0].update({
      rating: 8,
    });

    expect(updateType.type).toBe("British Cheese Board");
    expect(updateScript.description).toBe(
      "This is a cheese board that contains a variety of British cheese."
    );
    expect(updateRating.rating).toBe(8);
  });

  test("can update a cheese", async () => {
    const cheeseFound = await Cheese.findAll();
    const updateTitle = await cheeseFound[0].update({ title: "Buxton Blue" });
    const updateDescript = await cheeseFound[0].update({
      description:
        "This English blue cheese is a close relative of Blue Stilton.It is made from cow's milk and is lightly veined with a deep russet coloring. It usually made in a cylindrical shape. This cheese is complimented with a chilled glass of sweet dessert wine or ruby port.",
    });
    expect(updateTitle.title).toEqual("Buxton Blue");
    expect(updateDescript.description).toEqual(
      "This English blue cheese is a close relative of Blue Stilton.It is made from cow's milk and is lightly veined with a deep russet coloring. It usually made in a cylindrical shape. This cheese is complimented with a chilled glass of sweet dessert wine or ruby port."
    );
  });

  // D- deleting model instances
  test("Deleting a user", async () => {
    const userFound = await User.findAll();
    const destroyUser = await userFound[0].destroy();
    const destroyEmail = await userFound[0].destroy();

    expect(destroyUser.name).toEqual("Amanda");
    expect(destroyEmail.email).toEqual("amanda@test.com");
  });

  test("Deleting a board", async () => {
    const boardFound = await Board.findAll();
    const destroyType = await boardFound[0].destroy();
    const destroyScript = await boardFound[0].destroy();
    const destroyRating = await boardFound[0].destroy();

    expect(destroyType.type).toEqual("British Cheese Board");
    expect(destroyScript.description).toEqual(
      "This is a cheese board that contains a variety of British cheese."
    );
    expect(destroyRating.rating).toEqual(8);
  });

  test("Deleting a cheese", async () => {
    const cheeseFound = await Cheese.findAll();
    const destroyTitle = await cheeseFound[0].destroy();
    const destroyDescript = await cheeseFound[0].destroy();

    expect(destroyTitle.title).toEqual("Buxton Blue");
    expect(destroyDescript.description).toEqual(
      "This English blue cheese is a close relative of Blue Stilton.It is made from cow's milk and is lightly veined with a deep russet coloring. It usually made in a cylindrical shape. This cheese is complimented with a chilled glass of sweet dessert wine or ruby port."
    );
  });

  // Test for one-to-many
  test("User/Board with a one-to-many relationship", async () => {
    let bananaBoard = await Board.create({
      type: "Bananas",
      description: "A board with bananas and not cheese.",
      rating: 9,
    });

    // Banana Board
    let foundedUser = await User.findAll();
    let fruitBoard = foundedUser[0];
    // console.log(fruitBoard);

    await fruitBoard.addBoard(bananaBoard);

    let getBoards = await fruitBoard.getBoards();
    expect(getBoards.length).toEqual(1);
  });

  // Eager Loading tests (not sure if this is completely correct)
  test("Eager Loading", async () => {
    let boardFind = await Board.findAll();
    let cheeses = await Cheese.findAll();

    let bestBoard = await Board.create(seedBoard[0]);

    await bestBoard.addCheese(cheeses[0]);

    const pandaBoard = await Board.findAll({
      include: [{ model: Cheese, as: "cheeses" }],
    });
  });

  //console.log(pandaBoard[0].type); - this does not work for some reason, may need to reasses
});
