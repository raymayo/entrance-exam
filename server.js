import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

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

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
