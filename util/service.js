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

    createFolder(){        
        var folderName = `application-sites/${this.getFolderName()}`  
        if(!fs.existsSync(folderName)){
            console.log(folderName);
            try{
                fs.mkdirSync(folderName);
            }catch(e){
                console.log(e); 
            }
            
        }
    }    

}

module.exports = MasterService;