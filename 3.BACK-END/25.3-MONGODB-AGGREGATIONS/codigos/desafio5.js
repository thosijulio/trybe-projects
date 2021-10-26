db.movies.aggregate([
  {
    $project: {
      num_favs: {
        $cond: {
          if: { $isArray: "$cast" },
          then: {
            $size: {
              $setIntersection: [
              [
                "Sandra Bullock",
                "Tom Hanks",
                "Julia Roberts",
                "Kevin Spacey",
                "George Clooney",
              ],
              "$cast",
              ],
            }
          },
          else: 0,
        },
      },
      title: true,
      countries: true,
      "tomatoes.viewer.rating": true,
      _id: false,
    },
  },
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": {
        $gte: 3,
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $limit: 25,
  },
]).skip(24);
