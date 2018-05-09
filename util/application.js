const DBConnect = require('./dbconnect');


module.exports = (express,app,port,bodyParser,MasterService,fileUpload)=>{

    const currentPort  = process.env.PORT;
    const service = new MasterService();
    const R = require('./routepath');
    //let urlencodedParser = bodyParser.urlencoded({ extended: false });
    let urlencodedParser = express.urlencoded({ extended: false });
    const dbconnect = new DBConnect(R.DBURI);
    app.use(fileUpload());
    app.use('/',express.static('front-end'));
    app.use(R.ADMIN,express.static('admin'));
    app.use('/app',express.static('application-sites'));

    
    app.get('/services/get/:id',(req,res)=>{
        res.type('json');
        res.json({status:"ok",body:req.params.id});
    });

    app.get(R.DESTROY_ALL_FOLDER,(req,res)=>{
        if(req.params.id===8974552190761721){
            
        }
        res.type('json');
        res.json({status:req.params.id});
    });

    
    
    app.get(R.CREATE_FOLDER,(req,res)=>{
        const output = service.createFolder();
        res.json(output);
    });

    app.post(R.CREATE_PROJECT,urlencodedParser,(req,res)=>{
        if(req.body.projectname){
            let output = service.createFolder();
            if(output.status){
                res.json({
                    projectname:req.body.projectname,
                    folder:output.folderName
                }); 
            }else{
                res.json({
                    projectname:req.body.projectname
                });
            }
            //res.json({projectname:req.body.projectname});
        }
        
    });

    app.post(R.FILEUPLOAD,(req,res)=>{
        if(req.params.dest){
            if(req.params.dest.trim().length>3){
                const destLocation = `./application-sites/${req.params.dest}/project.zip`;
                if(!req.files){
                    res.json(service.getFileUploadErrorObject("Empty data is not accepted. Please upload a valid zip file."));   
                    return false;
                }
                if(req.files.file){
                  let zipfile = req.files.file;
                  if(zipfile.mimetype === "application/zip"){
                    service.placeZipFile(zipfile,destLocation,(data)=>{
                        res.json(data);
                    });
                  }else{
                    res.json(service.getFileUploadErrorObject("Only Zip file is allowed"));  
                  }
                  
                }else{
                    res.json(service.getFileUploadErrorObject("No file is there"));
                }

            }else{
                res.json(service.getFileUploadErrorObject("The name of the destination folder is not qualified"));
            }
        }
        
    });

    app.post(R.GETRESOURCES,urlencodedParser,(req,res)=>{
        dbconnect.searchUser({},(data)=>{
            res.json(data);
        })
    });

    app.post(R.REGISTER,urlencodedParser,(req,res)=>{
        dbconnect.saveUser(req.body,(data)=>{
            res.json(data);
        });
        
    });
    
    
    port = currentPort || port;
    app.listen(port,()=>{
        console.log('Server is running at '+port);
    });
    
};


/*

app.post('/login', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send( req.body)
      })
    
    app.post('/services/post/fileupload',urlencodedParser,(req,res)=>{
        
    });
    
    app.post('/services/post/',urlencodedParser,(req,res)=>{
        res.type('json');
        console.log(req.body);
        if(req.body){
            res.json({
                response:req.body.x,
                error:'Value'
            })
        }else{
            res.json({
                response:"null",
                error:'no data'
            })
        }
    });

*/
