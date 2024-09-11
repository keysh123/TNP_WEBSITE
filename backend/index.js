const express = require('express');
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json())  //req.body
const cors = require('cors');
app.use(cors());
const studentRoutes = require('./routes/student');
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.use('/api/students', studentRoutes);
app.listen(3030,()=>{
    console.log("server successfullt started")
})