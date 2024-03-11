const {Schema} = require('mongoose');

const Category = new Schema({
  name: { type: String, required: true},
  icon: { type: String, required: true}
}, 

{ timestamps: true }

);

module.exports = Category
