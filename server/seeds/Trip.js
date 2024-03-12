const db = require('../db');
const { Trip, TripList } = require('../models/');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    let tripLists = await TripList.find()

    console.log(tripLists)
    
    const trips = [
        {
            fromState: 'New York',
            fromCountry: 'USA',
            fromCity: 'New York City',
            toState: 'California',
            toCountry: 'USA',
            toCity: 'Los Angeles',
            startDate: '2024-04-01',
            endDate: '2024-04-10',
            tripList: tripLists[0]._id // You can specify the trip list's ObjectId here 
        },

        {
            fromState: 'England',
            fromCountry: 'United Kingdom',
            fromCity: 'London',
            toState: 'Île-de-France',
            toCountry: 'France',
            toCity: 'Paris',
            startDate: '2024-05-15',
            endDate: '2024-05-20',
            tripList: tripLists[1]._id // You can specify the trip list's ObjectId here
        },

        {
            fromState: 'Lazio',
            fromCountry: 'Italy',
            fromCity: 'Rome',
            toState: 'Community of Madrid',
            toCountry: 'Spain',
            toCity: 'Madrid',
            startDate: '2024-03-21',
            endDate: '2024-03-30',
            tripList: tripLists[2]._id // You can specify the trip list's ObjectId here 
        },

        {
            fromState: 'Florida',
            fromCountry: 'USA',
            fromCity: 'Miami',
            toState: 'Cundinamarca',
            toCountry: 'Colombia',
            toCity: 'Bogotá',
            startDate: '2024-02-16',
            endDate: '2024-02-27',
            tripList: tripLists[3]._id // You can specify the trip list's ObjectId here 
        }
    ];

    await Trip.insertMany(trips);
    console.log('Created trips!');
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
