const db = require('../db');
const { User } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const users = [
        {
            name: 'Abe Guerrero',
            email: 'ag@example.com',
            password: 'password123',
            username: 'abe_gue',
            profilePicture: 'profile1.jpg'
        },

        {
            name: 'Joy Wu',
            email: 'jw@example.com',
            password: 'password456',
            username: 'joy_wu',
            profilePicture: 'profile2.jpg'
        },

        {
            name: 'Clora Vernon',
            email: 'cv@example.com',
            password: 'password789',
            username: 'clo_ver',
            profilePicture: 'profile3.jpg'
        },

        {
            name: 'Shaun White',
            email: 'sw@example.com',
            password: 'password101',
            username: 'sha_whi',
            profilePicture: 'profile4.jpg'
        }
      
    ];

    try {
        await User.deleteMany();
        await User.insertMany(users);
        console.log('Created users!');
    } catch (error) {
        console.error('Error creating users:', error);
    }
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