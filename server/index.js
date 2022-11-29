const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const path = require('path');
const User = require('../models/user');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/userColors')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(e => {
        console.log('MONGO CONNECTION FAILED!!')
        console.log(e);
    })

app.set('views', path.join(__dirname,'../client'));
app.set('view engine', 'ejs');

//middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

//additional logic/assets
const colors = ['red', 'yellow', 'blue', 'orange', 'indigo', 'green', 'violet']

//routes
app.get('/', (req, res) => {
    res.render('index', { colors })
})

app.post('/users', async (req,res) => {
    console.log(req.body);
    const newUser = new User(req.body)
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
})

app.get('/search', async (req, res) => {
    const {search} = req.query
    const foundUser = await User.findOne({username:search})
    if(foundUser){
        res.status(200).json(foundUser);
    } else {
        res.status(404).send();
    }
})

//run app
app.listen(port, () => {
    console.log(`favColorApp listening on port ${port}`)
})
