const db = require('../db');
const Trip = require('../models/Trip');
const TripList = require('../models/TripList');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const tripList1 = await TripList.create({
        name: '',
        startDate: new Date('2024-03-15'),
        endDate: new Date('2024-03-20')
    });

    const tripList2 = await TripList.create({
        name: '',
        startDate: new Date('2024-04-10'),
        endDate: new Date('2024-04-15')
    });

    const tripList3 = await TripList.create({
        name: '',
        startDate: new Date('2024-05-13'),
        endDate: new Date('2024-05-23')
    });

    const tripList4 = await TripList.create({
        name: '',
        startDate: new Date('2024-06-17'),
        endDate: new Date('2024-06-24')
    });
    
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
            tripList: null // You can specify the trip list's ObjectId here 
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
            tripList: null // You can specify the trip list's ObjectId here
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
            tripList: null // You can specify the trip list's ObjectId here 
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
            tripList: null // You can specify the trip list's ObjectId here 
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
