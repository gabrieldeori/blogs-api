require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, listenWithClear);

function listenWithClear() {
  console.clear();
  console.log(`ouvindo porta ${PORT}`);
}

// não remova esse endpoint, e para o avaliador funcionar //
app.get('/', (_request, response) => {
  response.send();
});
