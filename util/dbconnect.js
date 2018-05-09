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

    getEmptyUser(){
        return {
            userid:this.getRandomUserId(),
            persona:{
                name:"",
                dob:new Date()
            },
            auth:{
                username:"",
                passcode:""
            },
            projects:[]
        };
    }

    getRandomUserId(){        
        return `${Math.random()}`.replace('0.','WBAPPR');
    }

    searchUser(searchCriteria,onOperationDone){
        User.find(searchCriteria,(error,docs)=>{
            if(error){
                onOperationDone({success:false,errorDetails:error});
            }else{
                onOperationDone({success:true,data:docs})
            }
        })
    }

    createNewProject(WBAPPRID,postedProjectDetail,onOperationDone){

    }

    saveUser(postedUser,onOperationDone){
            
            let crDOB,crUserData = this.getEmptyUser();
            crUserData.userid = postedUser.userid || crUserData.userid;
            crUserData.persona.name = postedUser.name || "";
            crDOB = postedUser.dob || crUserData.persona.dob;      

            crUserData.persona.dob = new Date(crDOB);
            crUserData.auth.username = postedUser.username || crUserData.auth.username;
            crUserData.auth.passcode = postedUser.passcode || crUserData.auth.passcode;

            let crUser = new User(crUserData);

            crUser.save().then(()=>{
                console.log('User saved successfully');
                onOperationDone({success:true,details:crUserData});

            }).catch((error)=>{
                console.log('Error occured while saving data MLab');
                console.dir(error);
                onOperationDone({success:false,errorDetails:error});
            });

            
            
    }

}  

module.exports = DBConnect;