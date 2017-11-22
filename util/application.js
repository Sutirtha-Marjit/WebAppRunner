const http = require('http');
const fs = require('fs');
var Application = {

    getAnInstance:function(){
        return {

            root:'/',

            port:9090,

            server:null,

            getAdminContent:function(url,callback){
                
                //fs.readFile()
                
            },

            requestHandler:function(req,res){
                var reqFolder = req.url.split('/')[1];
                if(reqFolder==="published"){
                    res.setHeader('Content-Type', 'text/html');
                    res.end('requested for a published folder');
                }else{
                    res.setHeader('Content-Type', 'text/html');
                    this.getAdminContent(req.url,function(data){

                    });
                    res.end(req.url);
                }
                
            },

            start:function(){
                var app = this;
                this.server = http.createServer((req,res)=>{
                    app.requestHandler(req,res);
                }); 
                this.server.listen(this.port,()=>{
                    console.log('Server started on '+this.port);
                })
                
            }


        };
    }

}; 

module.exports = Application;