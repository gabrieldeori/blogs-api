require('dotenv').config();
const express = require('express');
const router = require('./src/Routers');

const app = express();
const PORT = process.env.PORT || 3000;

function listenWithClear() {
  console.clear();
  console.log(`ouvindo porta ${PORT}`);
}

app.listen(PORT, listenWithClear);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ping', router.ping);
app.use('/user', router.user);

// não remova esse endpoint, e para o avaliador funcionar //
app.get('/', (_request, response) => {
  response.send();
});
