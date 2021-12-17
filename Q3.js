// create database
var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurkul@123"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!")

    con.query("CREATE DATABASE minedb",function(err,result){
        if (err) throw err;
        console.log("database created!")
    });
});
// >>>>>>>>>>> create database

var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurkul@123"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    con.query("CREATE DATABASE moviesdb",function(err,result){
        if (err) throw err;
        console.log("database created!")
    });
});

// >>>>>>>>create table
var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurkul@123",
    database:"moviesdb"
})
con.connect(function(err){
    if (err) throw err;
    console.log("connected!")    
    var sql="CREATE TABLE movies (id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),director VARCHAR(255), year INT,length INT)";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table created!")
    });
});

// >>>>>>insert data in table movies
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Navgurkul@123",
  database: "moviesdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql="INSERT INTO movies (id,title,director, year,length ) VALUES?";
  var values = [
    [,'Toy Story','John Lasseter',1995,81],
    [,'A Bugs Life','John seter',1998,95],
    [,'Toy Story2','Lasset',1999,93],
    [,'Monsters, Inc.','Pete Docter',2001,92],
    [,'Finding Nemo','Andrew Stanton',2003,107],
    [,'The Incredibles','Brad Bird',2004,116],
    [,'Cars','Johan sr',2006,117],
    [,'Ratatouille','Brand Bird',2007,115],
    [,'WALL-E','Andrew Stanton',2008,104],
    [,'Up','Pete Docter',200,	101],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});












