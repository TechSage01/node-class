const express = require('express');
const app = express();
const ejs = require('ejs');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 3300;
const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route');
const users = [];

mongoose.connect(URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/user', userRoutes);

// app.get('/', (req, res) => {
//     res.send('This is my homepage');
// })
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })
// app.get('/signup', (req, res) => {
//     let student = ["oloye", "abdulsalam", 'deji', 'tunde', 'solomon'];
//     res.render('signup.ejs', {name: 'Fola', student}) 
// })
// app.get('/ejs', (req, res) => {
//     res.render('home.ejs', {name: 'Abdulsalam', age: 22});
// })
            // app.get('/login',(req,res) =>{
            //     res.render('signup')
            // })


app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
})





// post request, Get request, put request, patch request, delete request 