db.voos.findOne({ $and: [
  { litrosCombustivel: { $not: { $gt: 600 } } },
  { litrosCombustivel: { $exists: true } },
  { $nor: [
    { "empresa.nome": "GOL" },
    { "empresa.nome": "AZUL" },
  ] },
],
},
{ vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false });
