const mongoose=require('mongoose');

const mongourl="mongodb://127.0.0.1:27017/tnpwebsite"

mongoose.connect(mongourl,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to MongoDBserver");
});
db.on('error',(err)=>{
    console.log("err in connecting to MongoDBserver");
});
db.on('disconnected',()=>{
    console.log("disconnected to MongoDBserver");
});

module.exports=db;