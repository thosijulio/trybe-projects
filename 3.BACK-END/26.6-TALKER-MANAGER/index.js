const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('./helpers/generateToken');
const checkAgeSended = require('./checkers/checkAgeSended');
const checkNameSended = require('./checkers/checkNameSended');
const checkTalkSended = require('./checkers/checkTalkSended');
const checkRateSended = require('./checkers/checkRateSended');
const checkWatchedAtSended = require('./checkers/checkWatchedAtSended');

let token = '';

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const readTalkers = ['./talker.json', 'utf-8'];
const checkTokenSended = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (token !== authorization) {
    return res.status(401).json({ message: 'Token inválido' });
  }
next();
};

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get(
  '/talker/search',
  checkTokenSended,
  async (req, res) => {
    const { q } = req.query;
    const talkers = JSON.parse(await fs.readFile(...readTalkers));

    if (!q || q === '') {
      console.log(talkers);
      return res.status(200).json(talkers);
    }

    const talkersFiltered = talkers.filter((val) => (val.name).includes(q));

    return res.status(200).json(talkersFiltered);
  },
);

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await fs.readFile(...readTalkers));
  const talker = talkers.find((val) => val.id === parseInt(id, 10));
  if (talker) return res.status(200).json(talker);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.get('/talker', async (req, res) => {
  const talkers = JSON.parse(await fs.readFile(...readTalkers));
  if (talkers) return res.status(200).json(talkers);
  return res.status(200).json([]);
});

app.post(
  '/login',
  (req, res, next) => {
    const { email } = req.body;

    if (!email || email === '') {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    
    // conteúdo realizado após a leitura do site: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        message: 'O "email" deve ter o formato "email@email.com"',
      });
    }

    next();
  },
  (req, res, next) => {
    const { password } = req.body;

    if (!password || password === '') {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }

    if (JSON.stringify(password).length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
  },
  (req, res) => {
    token = generateToken();

    return res.status(200).json({ token });
  },
);

app.post(
  '/talker',
  checkTokenSended,
  checkNameSended,
  checkAgeSended,
  checkTalkSended,
  checkWatchedAtSended,
  checkRateSended,
  async (req, res) => {
    const person = req.body;
    const talkers = JSON.parse(await fs.readFile(...readTalkers));
    person.id = talkers.length + 1;
    talkers.push(person);

    await fs.writeFile('./talker.json', JSON.stringify(talkers));

    return res.status(201).json(person);
  },
);

app.put(
  '/talker/:id',
  checkTokenSended,
  checkNameSended,
  checkAgeSended,
  checkTalkSended,
  checkRateSended,
  checkWatchedAtSended,
  async (req, res) => {
    const talker = req.body;
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(...readTalkers));
    talker.id = parseInt(id, 10);
    const newTalkers = talkers.filter((val) => val.id !== parseInt(id, 10));
    newTalkers.push(talker);

    await fs.writeFile('./talker.json', JSON.stringify(newTalkers));

    return res.status(200).send(talker);
  },
);

app.delete(
  '/talker/:id',
  checkTokenSended,
  async (req, res) => {
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(...readTalkers));
    const newTalkers = talkers.filter((val) => val.id !== parseInt(id, 10));
    await fs.writeFile('./talker.json', JSON.stringify(newTalkers));
    return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  },
);
