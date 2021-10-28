db.trips.aggregate([
  {
    $match: {
      $expr: {
        $eq: [{ $dayOfWeek: "$startTime" }, 5],
      },
    },
  },
  {
    $group: {
      _id: {
        nomeEstacao: "$startStationName",
      },
      total: {
          $sum: 1,
        },
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
]);
