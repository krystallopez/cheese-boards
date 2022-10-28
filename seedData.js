const seedUser = [
  {
    name: "Krystal",
    email: "krystal@test.com",
  },

  {
    name: "Penny",
    email: "piratepengwen@test.com",
  },
];

const seedBoard = [
  {
    type: "French Cheese Board",
    description: "This cheese board contains a variety of cheese from France",
    rating: 7,
  },
  {
    type: "Italian Cheese Board",
    description: "This cheese board contains a variety of cheese from Italy",
    rating: 10,
  },
];

const seedCheese = [
  {
    title: "Camembert",
    description:
      "Camembert is one of the first cheeses we associated with France, so it's no wonder it tops the list at number one. This cheese hails from Normandy, the northwestern tip of France where plentiful rain, gentle sun, and humidity produce the nutritious grass on which the Normandy cows feed.",
  },

  {
    title: "Munster",
    description:
      "Not for the faint of heart, this pungent cheese is famous for its strong odor and its soft, smooth interior, with a consistency almost like melting chocolate. The brick-red rind reveals a golden, barely sweet, and slightly sticky interior. In its native regions, the cheese is tamed by serving it with potatoes and cumin. Made on either side of the Vosges mountains, in Alsace it's called Munster while in Lorraine it's known as Gerome. In 1978, an AOC was given to Munster-Gerome, uniting the two cheeses.",
  },

  {
    title: "Mozzarella",
    description:
      "One of the better-known types of Italian cheese, mozzarella actually refers to a couple of different types of cheese, but it specifically refers to cheese which has usually been made from Italian buffalo milk and made using a spinning and cutting technique known as ‘pasta filata’.",
  },

  {
    title: "Parmigiano-Reggiano",
    description:
      "You may know this cheese better as ‘Parmesan’, which is the name given to the same cheese which has been made outside of a defined area in Northern Italy.Parmigiano-Reggiano is the real deal, produced in Parma, Reggio Emilia, Modena and parts of Bologna and Mantua and is known for its flaky texture and rich flavour and it’s also been referred to as the ‘King of Cheeses’!",
  },
];

module.exports = { seedUser, seedBoard, seedCheese };
