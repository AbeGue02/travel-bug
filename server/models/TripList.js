const {Schema} = require('mongoose');

const TripList = new Schema({
  name: { type: String, required: true},
  startDate: { type: Date, required: true},
  endDate: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', default: null},
},

{ timestamps: true}

);

module.exports = TripList

