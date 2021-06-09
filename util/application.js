module.exports = (express,app,port,bodyParser,MasterService)=>{    

    const service = new MasterService();
    let urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.get('/services/get/:id',(req,res)=>{
        res.type('json');
        res.json({status:"ok",body:req.params.id});
    });
    
    //app.post("")
    
    
    
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
