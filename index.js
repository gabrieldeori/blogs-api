require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

function listenWithClear() {
  console.clear();
  console.log(`ouvindo porta ${PORT}`);
}

app.listen(PORT, listenWithClear);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'Pong' });
});

app.post('/user', (req, res) => {
  const { displayName, email, password, image } = req.body;
  res.status(200).json({ displayName, email, password, image });
});

// não remova esse endpoint, e para o avaliador funcionar //
app.get('/', (_request, response) => {
  response.send();
});
