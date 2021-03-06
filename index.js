require('dotenv').config();
const express = require('express');
const router = require('./src/routers');
const { error } = require('./src/middleware');

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
app.use('/login', router.login);
app.use('/categories', router.categories);
app.use('/post', router.post);
app.use(error);

app.get('/', (_request, response) => {
  response.send();
});
