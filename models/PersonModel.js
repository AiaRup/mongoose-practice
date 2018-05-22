const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: []
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;