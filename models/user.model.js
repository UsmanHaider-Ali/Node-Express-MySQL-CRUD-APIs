//import dbconfig
const dbConn = require('../config/db.config');
const { use } = require('../routes/user.route');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.password = user.password;
    this.image = user.image;
}

//get all users
User.getAllUsers = (result) => {
    const getAllUsersQry = 'SELECT * FROM users';

    dbConn.query(getAllUsersQry, (err, res) => {
        if (err) {
            console.log('Error while getting all users', err);
            result(null, err);
        } else {
            console.log('All user retirived successfully');
            result(null, res);
        }
    });
}

//creatte a new user
User.createUser = (user, result) => {
    const createUserQry = 'INSERT INTO users SET ?';
    dbConn.query(createUserQry, user, (err, res) => {
        if (err) {
            console.log('Error while creating user');
            result(null, err);
        } else {
            console.log('User created Successfully');
            result(null, res);
        }
    });
}


//get user by id
User.getUserByID = (id, result) => {
    const getOneUserQry = 'SELECT * FROM users WHERE id=?';
    dbConn.query(getOneUserQry, id, (err, res) => {
        if (err) {
            result(null, err);
            console.log('Error while get user by id');
        } else {
            result(null, res);
            console.log('User Get by ID Successfulll');
        }
    });
}

//update user
User.updateUser = (id, user, result) => {
    const updateUseQry = 'UPDATE users SET name=?, email=?, phone=? WHERE id=?';
    dbConn.query(updateUseQry, [user.name, user.email, user.phone, id], (err, res) => {
        if (err) {
            result(null, err);
            console.log('Error while updating user');
        } else {
            result(null, res);
            console.log('User Update Successfully');
        }
    });
}

//delete suer
User.deleteUser = (id, result) => {
    const deleteUserQry = 'DELETE FROM users WHERE id=?';
    dbConn.query(deleteUserQry, [id], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = User;