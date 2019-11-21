const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
var cors = require('cors')


const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use('/assets', express.static( 'public'))

const whitelist = ['http://localhost:3000', 'http://localhost:8000']

var corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));




// Use Routes



app.get("/api/hotels/venetian",function (req,res) {

    var data = require('./MockData/venetian');

    if (data) {
        res.json(data);
    } else {
        res.status(400).json({ errors: { global: 'request errors -- no users data' } });
    }
})


app.get("/api/hotels/",function (req,res) {
    var data = require('./MockData/index');
    if (data) {
        res.json(data);
    } else {
        res.status(400).json({ errors: { global: 'request errors -- no customers data' } });
    }
})











app.use('/api/customers', require('./routes/customers'));




const port = 8888;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
