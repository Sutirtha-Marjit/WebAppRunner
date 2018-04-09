module.exports = (express,app,port,bodyParser,MasterService)=>{    

    app.use(express.static('front-end'));
    app.use('/admin',express.static('admin'));
    app.use('/app',express.static('application-sites'));

    const service = new MasterService();

    app.listen(port,()=>{
        console.log('Server is running at '+port);
    });
    
};
