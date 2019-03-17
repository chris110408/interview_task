const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
var cors = require('cors')


const app = express();

// Bodyparser Middleware
app.use(express.json());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes

app.get("/api/users",function (req,res) {
  var data = require('./MockData/user');
  if (data) {
    res.json(data);
  } else {
    res.status(400).json({ errors: { global: 'request errors -- no users data' } });
  }
})
app.use('/api/customers', require('./routes/customers'));




const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
