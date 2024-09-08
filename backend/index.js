const express = require('express');
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json())  //req.body
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', receivedData: data });
  });
  

app.listen(3030,()=>{
    console.log("server successfullt started")
})