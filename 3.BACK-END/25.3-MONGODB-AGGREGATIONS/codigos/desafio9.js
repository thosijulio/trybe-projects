db.trips.aggregate([
  {
    $match: {
      birthYear: {
        $exists: true,
        $nin: [null, ""],
      },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: {
        $max: { $toInt: "$birthYear" },
      },
      menorAnoNascimento: {
        $min: { $toInt: "$birthYear" },
      },
    },
  },
  {
    $project: {
      _id: false,
      maiorAnoNascimento: true,
      menorAnoNascimento: true,
    },
  },
]);
