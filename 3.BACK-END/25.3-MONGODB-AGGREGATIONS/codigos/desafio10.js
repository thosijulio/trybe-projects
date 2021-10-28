db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      media: {
        $avg: {
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
      },
    },
  },
  {
    $project: {
      _id: false,
      tipo: "$_id",
      duracaoMedia: {
        $round: ["$media", 2],
      },
    },
  },
  {
    $sort: {
      duracaoMedia: -1,
    },
  },
]);
