db.trips.aggregate([
  {
    $group: {
      _id: "$bikeid",
      duracaoMedia: {
        $avg: {
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
  },
  {
    $sort: {
      duracaoMedia: -1,
    },
  },
  {
    $project: {
      _id: false,
      bikeId: "$_id",
      duracaoMedia: {
        $ceil: "$duracaoMedia",
      },
    },
  },
  {
    $limit: 5,
  },
]);
