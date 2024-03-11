const mongoose = require('mongoose');
const userSchema = require('./User');
const tripListSchema = require('./TripList');
const tripSchema = require('./Trip');
const activitySchema = require('./Activity');
const categorySchema = require('./Category');

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
