const fs = require('fs');
class MasterService{

    constructor(){
      this.APPLICATION_HOST_DIR = 'application-sites';  
      this.serviceEngineInitTime = new Date();

      if(!fs.existsSync(this.APPLICATION_HOST_DIR)){
            console.log('no host directory is there');
            fs.mkdirSync(this.APPLICATION_HOST_DIR);
      }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getFolderName(){

        const alpha = String.fromCharCode(65+this.getRandomInt(1,20));
        const beta = String.fromCharCode(65+this.getRandomInt(1,20));
        return `${alpha}0${beta}A${parseInt(Math.random()*1000*this.getRandomInt(10,90))}-${(new Date()).getTime()}`;
    }

    placeZipFile(file,dest,onOperationComplete){
        file.mv(dest).then(()=>{
            onOperationComplete({
                success:true,
                details:"File copied to "+dest
            });
        }).catch((error)=>{
            onOperationComplete({
                success:false,
                details:error
            });
        })
    }

    getFileUploadErrorObject(text){
        return {
            success:false,
            errorDetails:{
                details:`File upload is in trouble:${text}`
            }
        }
    }

    superCleanUp(){
        
    }

    createFolder(){        
        
        var folderName = `${this.APPLICATION_HOST_DIR}/${this.getFolderName()}`  
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
                console.log('It might be possible that the '+folderName+' is not available');
                return output; 
            }
            
        }
    }    

}

module.exports = MasterService;