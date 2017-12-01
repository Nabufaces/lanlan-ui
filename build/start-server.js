'use strict';

const chalk = require('chalk');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));
app.use(require('connect-history-api-fallback')());

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(chalk.red(err.stack));
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log(chalk.green(`> Start server at ${port}`));
