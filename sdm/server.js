const express = require('express')
//const { Server } = require('http');
const app = express()

app.get('/' ,(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})

app.listen(8081,function(){
   console.log('server starteed');
})