const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ip: {
    type: String,
    trim: true
  },
  latitude: {
    type: Number,
    trim: true
  },
  longitude: {
    type: Number,
    trim: true
  }
});
CustomerSchema.plugin(uniqueValidator);
CustomerSchema.plugin(timestamp);
module.exports = Item = mongoose.model('customer', CustomerSchema);
