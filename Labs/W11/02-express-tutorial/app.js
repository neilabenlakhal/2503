const express = require ("express");
const app =express();

app.listen(5000,()=>{
    console.log('server is listening onport 5000')
    
    app.get('/', (req,res)=>{
        res.send('Home Page')
    })
    


})