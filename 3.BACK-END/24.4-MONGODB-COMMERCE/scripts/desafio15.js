db.produtos.find(
  { nome: {
    $regex: /mc/i,
  } },
  {
    nome: true,
    _id: false,
  },
);
