const {Schema} = require('mongoose');

const Activity = new Schema({
  name: { type: String, required: true},
  address: { type: String, required: true},
  trip: { type: Schema.Types.ObjectId, ref: 'Trip', default: null},
  category: {type: Schema.Types.ObjectId, ref: 'Category', default: null}
}, 

{ timestamps: true }
);

module.exports = Activity
