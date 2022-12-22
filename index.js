const express = require('express');
const bodyParser = require('body-parser');

//import user.route.js
const userRoutes = require('./routes/user.route');

//create an express app
const app = express();

//setup server port
const port = process.env.PORT || 3000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse request data content type application/json
app.use(bodyParser.json());

//define root route
app.get('/', (req, res) => {
    res.send('Rent a Toy');
});

// route for the user
app.use('/api/users', userRoutes);

//start server and listen to port
app.listen(port, () => {
    console.log(`Rent a Toy App is running at port ${port}`);
});