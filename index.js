const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/userColors')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(e => {
        console.log('MONGO CONNECTION FAILED!!')
        console.log(e);
    })

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({extended:true}))

//additional logic/assets
const colors = ['red', 'yellow', 'blue', 'orange', 'purple', 'green']

//routes
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index', { colors })
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send('Post request received');
//    res.redirect('/')
})

//run app
app.listen(port, () => {
    console.log(`favColorApp listening on port ${port}`)
})
