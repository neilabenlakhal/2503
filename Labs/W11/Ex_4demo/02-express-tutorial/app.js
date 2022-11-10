const express = require('express');  //import the module 
const app = express(); // invoke the express module

app.get('/', (req,res)=>{
    res.send('Home Page')
})
app.listen(5000,()=>{
    console.log('server is listening onport 5000')
})


