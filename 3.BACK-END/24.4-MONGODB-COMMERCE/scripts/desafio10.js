db.produtos.updateMany(
  {},
  { $set: {
    vendasPorDia: [NumberInt(0), NumberInt(0), NumberInt(0), NumberInt(0), NumberInt(0), NumberInt(0), NumberInt(0),],
  } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: {
    vendasPorDia: {
      $each: [60],
      $position: 3,
      $slice: 7
    } } },
);
