const db = require('../db');
const { Category } = require('../models/');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const categories = [
        {
            name: 'Sightseeing',
            icon: 'sightseeing-icon.png'
        },

        {
            name: 'Food',
            icon: 'food-icon.png'
        },

        {
            name: 'Outdoor',
            icon: 'outdoor-icon.png'
        },

        {
            name: 'Shopping',
            icon: 'shopping-icon.png'
        } 
    ];

    await Category.insertMany(categories);
    console.log('Created categories!');
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
