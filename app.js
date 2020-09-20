
let config = require('./config/config.json');
require('./models/db');
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.listen(process.env.PORT|| config.development.PORT,(err)=>{
    if(!err){
        console.log(`app is running on port ${config.development.PORT}`);
    }else{
        console.log("Return error");
    }
});

app.use("/api",(res)=>{
    res.statusCode(200);
})