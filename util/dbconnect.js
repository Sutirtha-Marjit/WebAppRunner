const mongoose = require('mongoose');
const userObject = require("./dbschema/user");

const Schema = mongoose.Schema;
const User = mongoose.model("UserModel",mongoose.Schema(userObject));

class DBConnect{

    constructor(){
      const username = "SUtirtha-Marjit";
      const password = "punisepaku#@1234";
      const dburiWithPassValue = `mongodb://${username}:${password}@ds163689.mlab.com:63689/dbwebapprunner`;
      const dburi = `mongodb://${username}@ds163689.mlab.com:63689/dbwebapprunner`;
      
      
      
      //this.conn = mongoose.createConnection(dburi);
      /*
      mongoose.connect(dburi).then(()=>{
          
      }).catch((error)=>{
          console.log(error);
      })*/
     
      
      
    }

}

module.exports = DBConnect;