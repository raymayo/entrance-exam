import mongoose from 'mongoose';

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
		type: String, // Using string since it contains a formatted date like "FRIDAY, JANUARY 24 2025"
		required: true, // Date is required
	},
	genderSelect: {
		type: String, // Gender is stored as a string
		required: true, // Gender is required
		enum: ['Male', 'Female', 'Other'], // Optional: restrict to predefined values
	},
	address: {
		type: String,
		required: true, // Address is required
	},
	birthday: {
		type: String, // Using string since it's not strictly a date in the example
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
	english: {
		type: Number, // English subject score
		required: true,
		min: 0, // Ensures the score cannot be negative
	},
	filipino: {
		type: Number, // Filipino subject score
		required: true,
		min: 0,
	},
	math: {
		type: Number, // Math subject score
		required: true,
		min: 0,
	},
	science: {
		type: Number, // Science subject score
		required: true,
		min: 0,
	},
	socialstudy: {
		type: Number, // Social studies subject score
		required: true,
		min: 0,
	},
});

// Export the schema as a model
const Examiner = mongoose.model('Examiner', ExaminerSchema);

export default Examiner;
