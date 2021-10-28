db.air_routes.find();

db.air_alliances.find();

db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      let: {
        airline1: "$airlines",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: ["$$airline1", "$airline.name"],
                },
                {
                  $or: [
                    {
                      $eq: ["$airplane", "747"],
                    },
                    {
                      $eq: ["$airplane", "380"],
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
      as: "airRoute",
    },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: {
        $sum: {
          $size: "$airRoute",
        },
      },
    },
  },
  {
    $sort: {
      totalRotas: -1,
    },
  },
  {
    $limit: 1,
  },
]);
