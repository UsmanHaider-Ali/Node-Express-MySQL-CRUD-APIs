const express = require('express');
const route = express.Router();

const userController = require('../controllers/user.controller');

//get all users
route.get('/get-all-users', userController.getAllUsers);

//add new user
route.post('/create-user', userController.createUser);

//get user based on id
route.get('/get-user-by-id/:user_id', userController.getUserByID);
module.exports = route;

//update user
route.patch('/update-user/:user_id', userController.updateUser);;

//delete user
route.delete('/delete-user/:user_id', userController.deleteUser);