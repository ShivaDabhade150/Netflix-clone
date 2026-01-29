

const mysql = require('mysql2')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"netFlixUser",
    password:"123456",
    port: 3306
   })


   db.connect((err)=>{
    if(err)
    {
        console.log('DB Connection failed')
        console.log(err.message);
    }
    else{
        console.log('connection successfull ')
    }
   })

module.exports = db;



