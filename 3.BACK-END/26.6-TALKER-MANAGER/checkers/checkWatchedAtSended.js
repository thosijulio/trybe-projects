const checkWatchedAtSended = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (watchedAt === '') {
    return res.status(400).json(
      {
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      },
    );
  }

  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = checkWatchedAtSended;
