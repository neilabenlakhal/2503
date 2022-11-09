const express = require('express');  //import the module 
const app = express(); // invoke the express module

app.get('/',(req,res)=>{
    res.json([{name:'john' },{name:'susan' }])
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})
