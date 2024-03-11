const {Schema} = require('mongoose');

const Trip = new Schema({
  fromState: { type: String, required: true},
  fromCountry: { type: String, required: true},
  fromCity: { type: String, required: true},
  toState: { type: String, required: true},
  toCountry: { type: String, required: true},
  toCity: { type: String, required: true},
  startDate: { type: String, required: true},
  endDate: { type: String, required: true},
  tripList: { type: Schema.Types.ObjectId, ref: 'TripList', default: null},
}, 

{ timestamps: true }

);

module.exports = Trip

