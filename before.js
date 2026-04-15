const express = require('express');
const app = express();
const ejs = require('ejs');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT;
const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const users = [];

mongoose.connect(URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
})
let customerSchema = mongoose.Schema({
    firnstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true, unique:[true, "Email has been taken, please choose another email"]},
    password: {type:String, required: true},
})

const Customer = mongoose.model('user', customerSchema)

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('This is my homepage');
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/signup', (req, res) => {
    let student = ["oloye", "abdulsalam", 'deji', 'tunde', 'solomon'];
    res.render('signup.ejs', {name: 'Fola', student}) 
})
app.get('/ejs', (req, res) => {
    res.render('home.ejs', {name: 'Abdulsalam', age: 22});
})
            // app.get('/login',(req,res) =>{
            //     res.render('signup')
            // })

app.post('/login', (req, res) => {
    const user = req.body;
    const newCustomer = new Customer(user);
    newCustomer.save()
    .then(() => {
        console.log('Customer saved successfully');
        res.send('Signup successful');
    })
    .catch((err) => {
        console.log('Error saving customer to DB', err);
        res.status(500).send('Error:'+ err.message);
    });
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
})





// post request, Get request, put request, patch request, delete request 