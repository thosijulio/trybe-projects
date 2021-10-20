db.voos.deleteMany({ $and: [
  { "empresa.nome": "AZUL" },
  { litrosCombutivel: { $lt: 400 } },
],
});
