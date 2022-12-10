const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const path = require('path');
const User = require('../models/user');

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
app.use(express.urlencoded({extended:true}))

//additional logic/assets
const colors = ['red', 'yellow', 'blue', 'orange', 'indigo', 'green', 'violet']

//routes
app.get('/', (req, res) => {
    res.render('index', { colors })
})


app.post('/users', async (req,res) => {
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save();
    console.log(newUser);
})

app.get('/search', async (req, res) => {
    console.log(req.query)
    const {search} = req.query
    const foundUser = await User.find({username:search})
    console.log(foundUser[0])
    res.json(foundUser[0].color);
})

//run app
app.listen(port, () => {
    console.log(`favColorApp listening on port ${port}`)
})
