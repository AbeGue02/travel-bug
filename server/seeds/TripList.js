const db = require('../db');
const TripList = require('../models/TripList');
const Trip = require('../models/Trip');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const trips = await Trip.find();
    
    const tripLists = [
        {
            name: 'Trip List 1',
            startDate: new Date('2024-03-15'),
            endDate: new Date('2024-03-20'),
            trip: null // You can specify the user's ObjectId here
        },

        {
            name: 'Trip List 2',
            startDate: new Date('2024-04-10'),
            endDate: new Date('2024-04-15'),
            trip: null // You can specify the user's ObjectId here
        },
    
        {
            name: 'Trip List 3',
            startDate: new Date('2024-05-13'),
            endDate: new Date('2024-05-23'),
            trip: null // You can specify the user's ObjectId here
        },
        
        {
            name: 'Trip List 4',
            startDate: new Date('2024-06-17'),
            endDate: new Date('2024-06-24'),
            trip: null // You can specify the user's ObjectId here
        }
    ];

    await TripList.insertMany(tripLists);
    console.log('Created trip lists!');
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
