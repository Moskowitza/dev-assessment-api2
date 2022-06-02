const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3030;
const people = require('./people.js');
const quotes = require('./quotes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome! The API is Running</h1>');
});

app.get('/people', (req, res) => {
  res.json(people);
});

app.get('/quotes/:id', (req, res) => {
  // TODO Write your code here
  const quote = quotes.find((quote) => quote.id + '' === req.params.id);
  res.json(quote);
});

app.post('/people', (req, res) => {
  // 1. Add the person to the people array
  // TODO write your own code here

  // 2. Send the people array back to the client
  res.json(people);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
