db.produtos.updateMany(
  {},
  { $set: {
    vendasPorDia: [
      NumberInt(0),
      NumberInt(0),
      NumberInt(0),
      NumberInt(0),
      NumberInt(0),
      NumberInt(0),
      NumberInt(0),
    ],
  } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: {
    vendasPorDia: {
      $each: [60],
      $position: 3,
      $slice: 7,
    } } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $push: {
    vendasPorDia: {
      $each: [120],
      $position: 6,
      $slice: 7,
    } } },
);

db.produtos.find(
  {},
  {
    nome: true,
    vendasPorDia: true,
    _id: false,
  },
);
