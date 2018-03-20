module.exports = (express,app)=>{    

    app.use('/admin',express.static('admin'));
    app.use('/app',express.static('application-sites'));

    app.listen(8909,()=>{
        console.log('Server is running at 8990');
    });
    
};
