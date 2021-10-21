db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["tasty", "combo"],
        $sort: 1,
      },
    },
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    tags: true,
    _id: false,
  },
);
