const express = require('express');

const app = express();
const viewsDir = __dirname + '/views';

app.get('/', (req, res) => {
  res.sendFile(viewsDir + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(viewsDir + '/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(viewsDir + '/contact-me.html');
});

app.use((req, res) => {
  res.sendFile(viewsDir + '/404.html');
});

app.listen(8080);
