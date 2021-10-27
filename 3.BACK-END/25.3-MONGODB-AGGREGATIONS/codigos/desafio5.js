const atores = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": {
        $gte: 3,
      },
    },
  },
  {
    $addFields: {
      atoresCompat: {
        $setIntersection: [
          atores,
          "$cast",
        ],
      },
    },
  },
  {
    $addFields: {
      num_favs: {
        $cond: {
          if: {
            $isArray: "$atoresCompat",
          },
          then: {
            $size: "$atoresCompat",
          },
          else: 0,
        },
      },
    },
  },
  {
    $sort: {
      sizeTeste: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $limit: 25,
  },
  {
    $skip: 24,
  },
  {
    $project: {
      title: true,
      _id: false,
    },
  },
]);
