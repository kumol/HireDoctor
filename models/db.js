let config = require("../config/config.json");
const mongoose = require("mongoose");
mongoose.connect(config.development.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("Database connected");
    }else{
        console.log(err);
    }
});
mongoose.Promise = global.Promise;