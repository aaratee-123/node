var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navgurkul@123",
    database:"studentdb"
});
con.connect(function(err,result){
    if (err) throw err;
    console.log("connected")
    var readline=require("readline-sync");
    var user=readline.question("enter the operation")
    if (user=="create"){
        var sql_1="CREATE TABLE studentInfo (id INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(255) UNIQUE  ,Surname VARCHAR(255) ,Marks INT ,Grade VARCHAR(255), UNIQUE (Surname) )";
        con.query(sql_1,function(err,result){
            if (err) throw err;
                console.log("create operation is successul!")
            });
    }else if(user=="insert"){
        var sql_2="INSERT INTO studentInfo (id,Name,Surname,Marks,Grade) VALUES? ";
        var values=[[,'Avantika','Shete',76,'B'],
                    [,'Ankita','Mande',86,'A'],
                    [,'Vanshika','Bendre',56,'C'],
                    [,'Niharika','Tutare',46,'C'],
                    [,'Chanda','Kahate',79,'B']
                    ]
            con.query(sql_2,[values],function(err,result){
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows)
            });
        
    }else if(user=="update"){
                var sql_3="UPDATE studentInfo SET Name='Mahima',Surname='Rathod',WHERE id=2 ";
                con.query(sql_3,function(err,result){
                    if (err) throw err;
                        console.log(" operation is successul!")
                });
    }else if(user=="delete"){
                var sql_4="DELETE FROM studentInfo  WHERE Name='Chanda'"
                con.query(sql_4,function(err,result){
                    if (err) throw err;
                        console.log(" operation is successul!")
                    });
                    

    }else{
        console.log("enter currect info")
    }


            
     
    
});
        
    
// How to Avoid Inserting Duplicate Records in SQL INSERT Query (5 Easy Ways)





