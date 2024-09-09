const express = require('express');
const app = express();
const db=require('./db');

const Student = require('./models/Student');

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
  
  app.post('/api/students', async (req, res) => {
    try {
      const student = new Student(req.body); // Create a new student using the model
      const result = await student.save(); // Save the student to the database
      res.status(201).json(result); // Send back the saved student
    } catch (error) {
      res.status(400).json({ error: error.message }); // Handle errors
    }
  });
  
  // Route to get all students
  app.get('/api/students', async (req, res) => {
    try {
      const students = await Student.find(); // Fetch all students
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  });

app.listen(3030,()=>{
    console.log("server successfullt started")
})