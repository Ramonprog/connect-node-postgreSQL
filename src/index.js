const express = require('express');
const routs = require('./routs');

const app = express();

app.use(express.json());

app.use(routs);

app.listen(3000, () => console.log('o app esta rodando na porta 3000'))