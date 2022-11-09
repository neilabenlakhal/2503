const express = require('express');  //import the module 
const path = require('path'); // use the pre-installed path module
const app = express(); // invoke the express module

//set up static and middleware
app.use(express.static('./public')) 
//With express place all static resources into a folder and place copy of resources to public folder

app.get('*',(req,res)=>{
 res.status(400).send('resource not found')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})

