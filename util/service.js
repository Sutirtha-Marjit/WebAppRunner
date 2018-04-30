const fs = require('fs');
class MasterService{

    constructor(){
      this.serviceEngineInitTime = new Date();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getFolderName(){

        const alpha = String.fromCharCode(65+this.getRandomInt(1,26));
        
        return `${alpha}A${parseInt(Math.random()*1000*this.getRandomInt(10,90))}${(new Date()).getTime()}`;
    }

    superCleanUp(){
        
    }

    createFolder(){        
        var folderName = `application-sites/${this.getFolderName()}`  
        var output = {
            folderName:null,
            status:false
        };
        if(!fs.existsSync(folderName)){
            try{
             fs.mkdirSync(folderName);
             output.folderName=folderName;
             output.status = true;
             return output;
                
            }catch(e){
                console.log(e);
                return output; 
            }
            
        }
    }    

}

module.exports = MasterService;