const express = require('express');
const route = express.Router();
route.post('/', (req, res) => {
  if (req.body.name) {
    return res.status(200).send(`Welcome ${req.body.name}`);
  }
  res.status(401).send('Please provide credentials');
});

module.exports = route;
