const options={
    client:'mysql',
    connection:{
        host:"localhost",
        user:"root",
        password:"Navgurukul@123",
        database:"database_DB"
    }
}
const knex=require('knex')(options);
knex.schema.createTable('Users',(table)=>{
    table.increments('ID')
    table.string('user_email')
    table.string('user_password')
}).then(()=>{
    console.log("table created")
}).catch(()=>{
    console.log("table already created");
})


knex.schema.createTable('States',(table)=>{
    table.increments('ID')
    table.string('State_name')
}).then(()=>{
        console.log("table created")
}).catch(()=>{
        console.log("table already created");
})

knex.schema.createTable('Districts',(table)=>{
    table.increments('ID')
    table.string('Dictrict_name')
    table.string('State_ID')
}).then(()=>{
        console.log("table created")
}).catch(()=>{
        console.log("table already created");
})

knex.schema.createTable('Childs',(table)=>{
    table.increments('ID')
    table.string('Name')
    table.string('Sex')
    table.string('DOB')
    table.string("Father's_Name")
    table.string('Mothers Name')
    table.string('State_ID')
    table.string('Dictrict_ID')
}).then(()=>{
        console.log("table created")
}).catch(()=>{
        console.log("table already created");
})


