const {Schema} = require('mongoose');

const Trip = new Schema({
  fromCity: { type: String, required: true},
  toCity: { type: String, required: true},
  startDate: { type: String, required: true},
  endDate: { type: String, required: true},
  tripList: { type: Schema.Types.ObjectId, ref: 'TripList', default: null},
}, 

{ timestamps: true }

);

module.exports = Trip

