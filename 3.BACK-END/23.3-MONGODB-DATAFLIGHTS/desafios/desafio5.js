db.voos.find({}, { vooId: true, _id: false }).limit(2).skip(9);
