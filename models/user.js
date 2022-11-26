const mongoose = require('mongoose');

//define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

//define model
const User = mongoose.model('User', userSchema);

module.exports = User;