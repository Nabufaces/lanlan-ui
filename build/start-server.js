'use strict';

const chalk = require('chalk');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.use(function(req, res, next) {
  res.status(404).send('404 NOT FIND!');
  res.status(500).send('500 SERVER ERROR!');
});

app.use((err, req, res, next) => {
  console.error(chalk.red(err.stack));
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log(chalk.green(`> Start server at ${port}`));
