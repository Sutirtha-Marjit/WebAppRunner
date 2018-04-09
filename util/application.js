module.exports = (express,app,port,bodyParser,MasterService)=>{    

    const service = new MasterService();
    app.use(express.static('front-end'));
    app.use('/admin',express.static('admin'));
    app.use('/app',express.static('application-sites'));
    app.get('/services/get/',(req,res)=>{
        res.type('json');
        res.json({status:"ok"});
    });

    app.post('/services/post/',(req,res)=>{
        res.type('json');
        res.json({status:"post"});
    });

    

    app.listen(port,()=>{
        console.log('Server is running at '+port);
    });
    
};
