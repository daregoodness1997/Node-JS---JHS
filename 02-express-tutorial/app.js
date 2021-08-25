const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');
// static assets

app.use(express.static('./methods-public/'));
// parse form data
app.use(express.urlencoded({ extended: false }));

app.get('/api/people', (re, res) => {
  res.status(200).json({ success: true, data: people });
});

// parse json
app.use(express.json());
// Auth
app.use('/login', auth);

// Routes
app.use('/api/people', people);

app.listen(5000, () => {
  console.log('Connection at 5000...');
});
