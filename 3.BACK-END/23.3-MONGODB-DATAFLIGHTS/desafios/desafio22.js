db.voos.findOne(
  { $and: [
    { $or: [
      { "empresa.nome": "AMERICAN AIRLINES" },
      { "empresa.nome": "DELTA AIRLINES" },
    ] },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ] },
  { vooId: true, _id: false },
);
