const {Schema} = require('mongoose');

const User = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    username: { type: String, required: true},
    profilePicture: { type: String, required: true, default: ''}
},

{ timestamps: true }

)

module.exports = User
