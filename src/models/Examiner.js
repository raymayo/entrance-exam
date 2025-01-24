import mongoose from "mongoose";

const ExaminerSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true, // Registration number is required
  },
  fullName: {
    type: String,
    required: true, // Full name is required
  },
  Date: {
    type: String, // Using string since it's formatted
    required: true, // Date is required
  },
  genderSelect: {
    type: String, // Assuming gender is stored as a string
    required: true, // Gender is required
    enum: ['Male', 'Female', 'Other'], // Optional: restrict to predefined values
  },
  address: {
    type: String,
    required: true, // Address is required
  },
  birthday: {
    type: Date, // Use a Date object for easier manipulation
    required: true, // Birthday is required
  },
  birthplace: {
    type: String,
    required: true, // Birthplace is required
  },
  contactNo: {
    type: String, // Storing as string to allow special characters like '+' or '-'
    required: true, // Contact number is required
  },
  guardianName: {
    type: String,
    required: true, // Guardian's name is required
  },
  lastSchool: {
    type: String, // Name of the last school attended
    required: true,
  },
  lastSchoolAddress: {
    type: String, // Address of the last school
    required: true,
  },
  course1st: {
    type: String, // First choice course
    required: true,
  },
  course2nd: {
    type: String, // Second choice course
    required: true,
  },
  transfereeCourse: {
    type: String, // Transferee course
    required: false, // Optional, as not all students may be transferees
  },
});

// Export the schema as a model
const Examiner = mongoose.model("Examiner", ExaminerSchema);

export default Examiner;
