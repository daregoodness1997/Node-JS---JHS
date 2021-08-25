const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Pages</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get('/api/products/:productID', (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    product => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('<h1>Product does not exist</h1>');
  }
  res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('Hello world');
});

app.get('/api/v1/query/', (req, res) => {
  console.log(req.query);
  res.send('Hello world');
});
// app.all('*', (req, res) => {
//   res.send('Error Page');

app.listen(5000, () => {
  console.log('Connection at 5000');
});
