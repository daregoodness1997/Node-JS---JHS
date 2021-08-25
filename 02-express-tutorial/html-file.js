const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http
  .createServer((req, res) => {
    // console.log(req.url);

    const url = req.url;
    console.log(url);
    if (url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(homePage);
      res.end();
    }
    // About Page
    else if (url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h1>About page</h1>`);
      res.end();
    }

    // styles
    else if (url === '/styles.css') {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(homeStyles);
      res.end();
    }
    // logo
    else if (url === '/logo.svg') {
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      res.write(homeImage);
      res.end();
    }
    // logic
    else if (url === '/browser-app.js') {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(homeLogic);
      res.end();
    }
    // Error 404
    else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(`<h1>Page not found</h1>`);
      res.end();
    }
  })
  .listen(5000);
