const mongoose = require('mongoose');
const userSchema = require('./user');
const tripListSchema = require('./tripList');
const tripSchema = require('./trip');
const activitySchema = require('./activity');
const categorySchema = require('./category');

const User = mongoose.model('User', userSchema);
const TripList = mongoose.model('TripList', tripListSchema);
const Trip = mongoose.model('Trip', tripSchema);
const Activity = mongoose.model('Activity', activitySchema);
const Category = mongoose.model('Category', categorySchema);


module.exports = {
    User, 
    TripList,
    Trip,
    Activity,
    Category
};
