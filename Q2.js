const options={
    client:'mysql2',
    connection:{
        host:"localhost",
        user:"root",
        password:"Navgurkul@123",
        database:"knexdb"
    }
}
const knex=require('knex')(options);
var a=require('readline-sync');
user=a.question("enter the operation command")
if (user=="create"){
    // Table=a.question("enter the table name")
    knex.schema.createTable("marklist",(table)=>{
        table.increments('ID')
        table.string('NAME')
        table.integer('AGE')
    }).then(()=>{
        console.log("table created")
    }).catch((err)=>{
        console.log(err);
        throw err
    }).finally(()=>{
        knex.destroy();
    });
}
else if(user=="insert"){
    const customer=[]
    // var readl=require("readline-sync")
    var num=a.question("enter the number")
    for (var i=1;i<=num;i++){
        var id =a.question("enter the id")
        var name=a.question("enter the name")
        var age=a.question("enter the age")
        const dict={ID:id,NAME:name,AGE:age}
        customer.push(dict)
        // console.log(customer)
    
    
    }   
    knex("marklist").insert(customer).then(()=>{
        console.log("table inserted")
    }).catch((err)=>{
        console.log(err);
        throw err
    }).finally(()=>{
        knex.destroy();
    });

}