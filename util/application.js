const DBConnect = require('./dbconnect');

module.exports = (express,app,port,bodyParser,MasterService)=>{

    const service = new MasterService();
    const R = require('./routepath');
    let urlencodedParser = bodyParser.urlencoded({ extended: false });
    const dbconnect = new DBConnect(R.DBURI);
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
    
    
    
    app.listen(process.env.PORT,()=>{
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
