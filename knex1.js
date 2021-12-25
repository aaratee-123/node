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
var redline=require('readline-sync');
user=redline.question("enter the operation command")
if (user=="create"){
    knex.schema.createTable('customer',(table)=>{
        table.increments('ID')
        table.string('NAME')
        table.integer('AGE')
        table.string('ADDRESS')
        table.integer('SALARY')
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
    const customer=[
        {NAME:"Ramesh",AGE:32,ADDRESS:"Ahmedabad",SALARY:"2000.00"},
        {NAME:"Khilan",AGE:25,ADDRESS:"Delhi",SALARY:"1500.00"},
        {NAME:"Kaushik",AGE:23,ADDRESS:"Kota",SALARY:"2000.00"},
        {NAME:"Chitali",AGE:25,ADDRESS:"Mumbai",SALARY:"6500.00"},
        {NAME:"Harshal",AGE:27,ADDRESS:"Bhopal",SALARY:"8500.00"},
        {NAME:"Komal",AGE:22,ADDRESS:"MP",SALARY:"4500.00"},
        {NAME:"Muffy",AGE:24,ADDRESS:"Indore",SALARY:"10000.00"},
    ]
    knex('customer').insert(customer).then(()=>{
        console.log("table inserted")
    }).catch((err)=>{
        console.log(err);
        throw err
    }).finally(()=>{
        knex.destroy();
    });

}else if(user=="update"){
    knex('customer').where({SALARY:2000.00}).update({SALARY:5000.00}).then(()=>{
        if (true){
            console.log("updated!")
        }
    }).catch((err)=>{
        console.log(err)
        res.send("do not exist");
        throw err
    }).finally(()=>{
        knex.destroy()
    });
}else if(user=="delete"){
    knex.from('customer').where({AGE:25}).del().then(()=>{
    if (true){
        console.log("deleted!")
    }
    }).catch((err)=>{
        console.log(err)
        throw err
    }).finally(()=>{
        knex.destroy()
    });

}

