db.produtos.updateMany(
  { nome: "Big Mac"},
  { $currentDate: {
    ultimaModificacao: true,
  }},
);

db.produtos.find(
  { nome: "Big Mac" },
  {
    nome: true,
    ultimaModificacao: true,
    _id: false,
  },
);
