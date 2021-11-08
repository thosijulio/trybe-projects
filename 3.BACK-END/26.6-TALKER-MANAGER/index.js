const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('./helpers/generateToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
  const talker = talkers.find((val) => val.id === parseInt(id, 10));
  if (talker) return res.status(200).json(talker);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.get('/talker', async (req, res) => {
  const talkers = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
  if (talkers.length) return res.status(200).json(talkers);
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
  async (req, res) => {
    const token = generateToken();
    console.log(token);
    try {
      await fs.writeFile('./authentication.json', JSON.stringify(token), { flag: 'wx' });
      return res.status(200).json({ token });
    } catch (err) {
      return res.status(400).json({ message: 'Falha ao criar token' });
    }
},
);
