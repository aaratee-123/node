//>>>>>> create table
// const options={
//     client:'mysql2',
//     connection:{
//         host:"localhost",
//         user:"root",
//         password:"Navgurkul@123",
//         database:"mydb"
//     }
// }
// const knex=require('knex')(options);
// knex.schema.createTable('cars',(table)=>{
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(()=>{
//     console.log("table created")
// }).catch((err)=>{
//     console.log(err);
//     throw err
// }).finally(()=>{
//     knex.destroy();
// });


// >>>>>>>>>>>insert table
const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Navgurkul@123',
        database: 'mydb'
    }
}

const knex = require('knex')(options);
const cars=[
    {name:'Audi',price:52642},
    {name:'Mercedes',price:57127},
    {name:'Skoda',price:9000},
    {name:'Volvo',price:29000},
    {name:'Bentley',price:350000},
    {name:'Citroen',price:21000},
    {name:'Hummer',price:41400},
    {name:'Volkswagen',price:21600}
]
knex('cars').insert(cars).then(()=>{
    console.log("data inserted")
}).catch(()=>{
    console.log(err);
    throw err
}).finally(()=>{
    knex.destroy();
});
//  >>>>>>>>>>select data from table
const options={
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'Navgurkul@123',
        database:'mydb'
    }
}
const knex=require('knex')(options);
knex.from('cars').select("*").then((rows)=>{
    for (row of rows){
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }
}).catch((err)=>{
    console.log(err)
    throw err
}).finally(()=>{
    knex.destroy()
});

// >>>>>>>select data from where
const options={
    client:'mysql2',
    // connection:"mysql://root:Navgurkul@123localhost:8000/mydb"
    connection:{
                host:'localhost',
                user:'root',
                password:'Navgurkul@123',
                database:'mydb'
            }
}
const knex=require('knex')(options);
knex.from('cars').select("name","price").where('price','>',"50000").then((rows)=>{
    for (row of rows){
        console.log(`${row['name']} ${row['price']}`);
    }
}).catch((err)=>{
    console.log(err)
    throw err
}).finally(()=>{
    knex.destroy()
});

// >>>>>>use of order


const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Navgurkul@123',
        database: 'mydb'
    }
}

const knex = require('knex')(options);

knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });














