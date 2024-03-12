const db = require('../db');
const { Activity, Trip, Category } = require('../models/');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const trips = await Trip.find();
    const categories = await Category.find();
    
    const activities = [
        {
            name: 'Visit Statue of Liberty',
            address: 'Liberty Island, New York, NY 10004, United States',
            date: new Date('2024-03-15'),
            trip: trips[0]._id, // You can specify the trip's ObjectId here
            category: categories[0]._id // You can specify the category's ObjectId here 
        },

        {
            name: 'Explore Central Park',
            address: 'New York, NY 10024, United States',
            date: new Date('2024-03-21'),
            trip: trips[1]._id, // You can specify the trip's ObjectId here 
            category: categories[1]._id // You can specify the category's ObjectId here 
        },

        {
            name: 'Empire State Building',
            address: '20 W 34th St, New York, NY 10118, United States',
            date: new Date('2024-04-01'),
            trip: trips[2]._id, // You can specify the trip's ObjectId here 
            category: categories[2]._id // You can specify the category's ObjectId here 
        },

        {
            name: 'Times Square',
            address: 'Manhattan, NY 10036, United States',
            date: new Date('2024-04-06'),
            trip: trips[3]._id, // You can specify the trip's ObjectId here 
            category: categories[3]._id // You can specify the category's ObjectId here 
        }
    ];

    await Activity.insertMany(activities);
    console.log('Created activities!');
};

const run = async () => {
    try {
        await main();
    } catch (error) {
        console.error('Error running the seed script:', error);
    } finally {
        db.close();
    }
};

run();
