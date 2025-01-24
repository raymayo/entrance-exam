import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Examiner from './src/models/Examiner.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// MongoDB Connection
const mongoDB = process.env.MONGO_URI || 'mongodb://localhost:27017/EntranceExamDB';
mongoose
  .connect(mongoDB)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.get('/api/examiner/:regNo', async (req, res) => {
  const { regNo } = req.params;

  try {
    const student = await Examiner.findOne({ regNo });

    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    res.status(200).json(student); // Send the found student data
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch student data' });
  }
});

app.post("/api/examiners", async (req, res) => {
  try {
    const {
      regNo,
      fullName,
      Date,
      genderSelect,
      address,
      birthday,
      birthplace,
      contactNo,
      guardianName,
      lastSchool,
      lastSchoolAddress,
      course1st,
      course2nd,
      transfereeCourse,
      english,
      filipino,
      math,
      science,
      socialstudy,
    } = req.body;

    // Validate required fields (optional, but recommended)
    if (!regNo || !fullName || !Date || !genderSelect || !address) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    // Create a new Examiner document
    const newExaminer = new Examiner({
      regNo,
      fullName,
      Date,
      genderSelect,
      address,
      birthday,
      birthplace,
      contactNo,
      guardianName,
      lastSchool,
      lastSchoolAddress,
      course1st,
      course2nd,
      transfereeCourse,
      english,
      filipino,
      math,
      science,
      socialstudy,
    });

    // Save to the database
    const savedExaminer = await newExaminer.save();

    res.status(201).json({
      success: true,
      message: "Examiner created successfully.",
      data: savedExaminer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the examiner.",
      error: error.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


