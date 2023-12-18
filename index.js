const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('page.ejs', {
    title: 'Home',
    description: 'This is the home page. The main page. The pagest of pages.',
  });
});

app.get('/about', (req, res) => {
  res.render('page.ejs', {
    title: 'About Me',
    description: 'I am a person of interest.',
  });
});

app.get('/contact-me', (req, res) => {
  res.render('page.ejs', {
    title: 'Contact Me',
    description:
      "You'd expect my contact details to show up here. I guess I should've put them up.",
  });
});

app.use((req, res) => {
  res.status(404).render('page.ejs', {
    title: '404 Not Found',
    description: 'Nothing here, eh?',
  });
});

app.listen(8080);
