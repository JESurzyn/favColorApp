const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/userColors')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(e => {
        console.log('MONGO CONNECTION FAILED!!')
        console.log(e);
    })

const seedUsers = [
    {
        username: 'user1',
        color: 'red'
    },
    {
        username: 'user2',
        color: 'green'
    },
]

User.insertMany(seedUsers)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })