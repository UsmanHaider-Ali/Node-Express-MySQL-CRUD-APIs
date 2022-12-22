const mysql = require('mysql');

//create mysql connection

const dbDonn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rent_a_toy'
});

dbDonn.connect((error) => {
    if (error) throw error;
    console.log('Database Connected Successfully');
});

module.exports = dbDonn;