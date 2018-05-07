const mongoose = require('mongoose');
const userObject = require("./dbschema/user");

const Schema = mongoose.Schema;
const User = mongoose.model("User",mongoose.Schema(userObject,{collection:'appuserbase'}));

class DBConnect{

    constructor(){
      /*
      const username = "SUtirtha-Marjit";
      const password = "punisepaku#@1234";*/
      const username = "admin";
      const password = "admin";
      const dburiWithPassValue = `mongodb://${username}:${password}@ds163689.mlab.com:63689/dbwebapprunner`;
      const dburi = `mongodb://${username}@ds163689.mlab.com:63689/dbwebapprunner`;
      var dbconnected=false;
      
      let cr_user = new User({
            userid:"xdtopa09091",
            persona:{
                name:"Mr X",
                dob:new Date('09/09/1980')
            },
            auth:{
                username:'sutirtha.marjit@gmail.com',
                passcode:'LXT45@123'
            }
      });
      
      //console.dir(cr_user);
      /*
      this.conn = mongoose.createConnection(dburi);
      if(this.conn){
          console.log(`Great! Connection established with ${dburi}`);
      }*/
      

      mongoose.connect(dburiWithPassValue).then(()=>{
          console.log(`Great! Connection established with ${dburiWithPassValue}`);
          dbconnected = true;
          
          
          }).catch((error)=>{
          console.log("Error occured while saving the data");
          })
     
      
      
    }

    getRandomUserId(){
        
        return `${Math.random()}`.replace('0.','WBAPPR');
    }

    saveUser(postedUser,onOperationDone){
            
            let userid = this.getRandomUserId();

            /*let currentUser = new User({
                userid:this.getRandomUserId()
            });*/

            onOperationDone({user:userid});
            /*
            cr_user.save().then(()=>{
                console.log('Saved successfully');
            }).catch((error)=>{
                console.log('Error occured while saving data MLab');
                console.dir(error);
            });
          */
    }

}  

module.exports = DBConnect;