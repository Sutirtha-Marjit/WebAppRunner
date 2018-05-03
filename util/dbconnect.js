const mongoose = require('mongoose');
const userObject = require("./dbschema/user");

const Schema = mongoose.Schema;
const User = mongoose.model("User",mongoose.Schema(userObject));

class DBConnect{

    constructor(){
      const username = "SUtirtha-Marjit";
      const password = "punisepaku#@1234";
      const dburiWithPassValue = `mongodb://${username}:${password}@ds163689.mlab.com:63689/dbwebapprunner`;
      const dburi = `mongodb://${username}@ds163689.mlab.com:63689/dbwebapprunner`;
      /*
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
      });*/
      
      //console.dir(cr_user);
      
      //this.conn = mongoose.createConnection(dburi);
      /*
      mongoose.connect(dburi).then(()=>{
          console.log(`DB Connected to ${dburi}`);
          cr_user.save().then(()=>{
              console.log('Saved successfully');
          })
      }).catch((error)=>{
          console.log(error);
      })
     */
      
      
    }

}

module.exports = DBConnect;