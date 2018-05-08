const DBConnect = require('./dbconnect');


module.exports = (express,app,port,bodyParser,MasterService,fileUpload)=>{

    const currentPort  = process.env.PORT;
    const service = new MasterService();
    const R = require('./routepath');
    let urlencodedParser = bodyParser.urlencoded({ extended: false });
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

    app.post(R.FILEUPLOAD,(req,res)=>{
        if(req.files){
            let zipfile = req.files.file;
            //zipfile.mv('/application-sites/')
            res.json({error:2});
        }else{
            res.json({error:1});
        }
        
    });

    app.post(R.GETRESOURCES,urlencodedParser,(req,res)=>{
        dbconnect.searchUser({'persona.dob':'1980-11-19T18:30:00.000Z'},(data)=>{
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
