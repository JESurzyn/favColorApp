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
    // res.send('Hello World');
    res.render('index', { colors })
})
// app.get('/users', async (req, res) => {
//     // res.send('Hello World');
//     // res.render('index', { colors })
//     console.log(req.query)
//     const {search} = req.query
//     //provide if else logic for query response
//     const user = await User.find({username:search})
//     console.log(user[0].color)
//     res.send('hello')
// })
// app.get('/users', (req, res) => {
//     res.json('test').send();
// })

app.post('/users', async (req,res) => {
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save();
    console.log(newUser);
    // res.redirect('/')

})

app.get('/search', async (req, res) => {
    console.log(req.query)
    const {search} = req.query
    const foundUser = await User.find({username:search})
    console.log(foundUser)
    console.log(foundUser[0])
    // console.log(foundUser[0])
    // console.log(json(foundUser[0]))
    // const userIso = foundUser[0]
    // console.log(userIso.color)
    
    console.log(foundUser[0].color)
    res.json('tester').send();
    // console.log(foundUser[0].color)

    // res.send(foundUser[0].color)
})

//run app
app.listen(port, () => {
    console.log(`favColorApp listening on port ${port}`)
})
