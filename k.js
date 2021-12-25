const options={
    client:'mysql2',
    connection:{
        host:"localhost",
        user:"root",
        password:"Navgurkul@123",
        database:"knexdb"
    }
}
var customer=[]
const knex=require('knex')(options);
var redline=require('readline-sync');
user=redline.question("enter the operation command")
function create_table(){
    if (user=="create"){
        knex.schema.hasTable('citizen').then((exists)=>{
            if (!exists){
                console.log("table created!")
                return knex.schema.createTable('citizen',(table)=>{
                table.increments('ID').primary()
                table.string('NAME')
                table.integer('AGE')
                table.string('ADDRESS')
                table.integer('SALARY')
            }).catch((err)=>{
                console.log(err);
                throw err
            }).finally(()=>{
                knex.destroy();
            });

            }else{
                console.log("sorry: user table already created!")
            }
        });
    }
    
}
create_table()
function insert_table(){
    if(user=="insert"){
        var a=require("readline-sync");
            knex.schema.hasTable('customer').then((exists)=>{
                if (!exists){
                    var a=require("readline-sync");
                    var num=a.question("enter the number")
                    for (var i=1;i<=num;i++){
                        // var a=require("readline-sync");
                        var id =a.question("enter the id")
                        var name=a.question("enter the name")
                        var age=a.question("enter the age")
                        var address=a.question("enter the address")
                        var salary=a.question("enter the salary")
                        const dict={ID:id,NAME:name,AGE:age,ADDRESS:address,SALARY:salary}
                        customer.push(dict)
                        // console.log(customer)
                    }knex('citizen').insert(customer).then(()=>{
                        console.log("table inserted")
                    }).catch((err)=>{
                        console.log(err);
                        throw err
                    }).finally(()=>{
                        knex.destroy();
                    });
                    }else{
                        console.log("sorry: user table already inserted!")
                    }
            })
        } 
}
insert_table()
function update_table(){
    if(user=="update"){
        var SALARY=5000.00
        knex.schema.hasTable(SALARY).then((exists)=>{
        if (!exists){
            knex('citizen').where({SALARY:2000.00}).update({SALARY:5000.00}).then(()=>{
                console.log("table updated")
            }).catch((err)=>{
                console.log(err);
                throw err
            }).finally(()=>{
                knex.destroy();
            });
        }else{
            console.log("sorry: user table already udated!")
        }
        })
    }
}
update_table()
function delete_table(){
    if(user=="delete"){
        knex.from('citizen').where({AGE:25}).del().then(()=>{
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

}
delete_table()
