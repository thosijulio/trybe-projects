const express = require('express');
const mainRouter = require('./controllers/mainRouter');

const app = express();
const PORT = 3000;

app.use('/', express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/', mainRouter);

app.use('/', (err, _req, res, _next) => {
  res.status(err.status).json({
    err: {
      code: err.code,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
