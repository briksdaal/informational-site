const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    const view = req.url === '/' ? 'index' : req.url;
    const filepath = path.join(__dirname, 'views', `${view}.html`);
    const errorpath = path.join(__dirname, 'views', '404.html');

    fs.readFile(filepath, (err, content) => {
      if (err) {
        fs.readFile(errorpath, (err, errorpage) => {
          if (err) throw err;
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write(errorpage);
          res.end();
        });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
      }
    });
  })
  .listen(8080);
