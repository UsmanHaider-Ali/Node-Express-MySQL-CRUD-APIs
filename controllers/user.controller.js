const { ifError } = require('assert');
const { Console } = require('console');
const exp = require('constants');
const e = require('express');
const { isReadable } = require('stream');
const userModel = require('../models/user.model')

//get all users
exports.getAllUsers = (req, res) => {
    userModel.getAllUsers((err, user) => {
        if (err) {
            res.send(err);
        } else {
            // if (err)
            // res.send(err);
            // res.send({ success: false, data: user, message: 'Users Not Found' });
            res.send({ success: true, data: user, message: 'All Users Retrived Successfully' });
        }
    });
}

//create user
exports.createUser = (req, res) => {
    console.log('Name is: ', req.body.name);
    console.log('Email is: ', req.body.email);
    console.log('Password is: ', req.body.password);
    console.log('Phone is: ', req.body.phone);
    console.log('Image is: ', req.body.image);

    if (!req.body.phone) {
        res.send({ success: false, message: 'Phone Field is Missing' });
    }
    // if (req.body.phone.trim().length == 0) {
    //     res.send({ success: false, message: 'Phone Cannot b null' });
    // }

    const user = new userModel(req.body);
    console.log('New User Record', user);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send({ success: false, message: 'Please Provide All Fields' });
    } else {
        userModel.createUser(user, (err, user) => {
            if (err)
                res.send(err);
            if (res.affectedRow > 0)
                res.send({ success: false, message: 'User Not Created' });
            res.send({ success: true, message: 'User Created Successfully' });
        });
    }
}

//get user by id
exports.getUserByID = (req, res) => {
    userModel.getUserByID(req.params.user_id, (err, user) => {
        if (err) {
            res.send(err)
        } else {
            if (user == null)
            // Console.length(user);
                res.send({ success: false, data: user, message: 'User Not Found' });
            else {
                res.send({ success: true, data: user, message: 'User Retrived Successflly' });
            }
        }
    })
}

//update user
exports.updateUser = (req, res) => {
    const user = new userModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send({ success: false, message: 'Please Provide All Fields' });
    } else {
        userModel.updateUser(req.params.user_id, user, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.send({ success: true, message: 'User Updated Successfully', data: user });
            }
        });
    }
}

//delete user
exports.deleteUser = (req, res) => {
    userModel.deleteUser(req.params.user_id, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            // if (user.affectedRow > 0)
            res.send({ success: true, message: 'User Delete Successflly' });
            // else
            // res.send({ success: true, message: 'User Not Found' });
        }
    });
}