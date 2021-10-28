db.trips.aggregate([
  {
    $match: {
      $expr: {
        $eq: [
          {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$startTime",
            },
          },
          "2016-03-10",
        ],
      },
    },
  },
  {
    $addFields: {
      duracao: {
        $multiply: [
          {
            $divide: [
              {
                $subtract: [
                  "$stopTime",
                  "$startTime",
                ],
              },
              3600000,
            ],
          },
          60,
        ],
      },
    },
  },
  {
    $group: {
      _id: null,
      duracaoMediaEmMinutos: {
        $avg: "$duracao",
      },
    },
  },
  {
    $project: {
      _id: false,
      duracaoMediaEmMinutos: {
        $ceil: "$duracaoMediaEmMinutos",
      },
    },
  },
]);
