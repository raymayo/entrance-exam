/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExamEntry = () => {
	const [formData, setFormData] = useState({
		regNo: '',
		fullName: '',
		Date: formatDate(new Date()),
		genderSelect: '',
		address: '',
		birthday: '',
		birthplace: '',
		contactNo: '',
		guardianName: '',
		lastSchool: '',
		lastSchoolAddress: '',
		course1st: '',
		course2nd: '',
		transfereeCourse: '',
	});

	// const [date, setDate] = useState(formatDate(new Date()));

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isConfirmed = window.confirm(
			'Please double check your data before submitting. If everything is good please click OK.'
		);

		if (!isConfirmed) {
			return;
		}
		// Convert all string values to uppercase
		const upperCaseFormData = Object.fromEntries(
			Object.entries(formData).map(([key, value]) =>
				typeof value === 'string' ? [key, value.toUpperCase()] : [key, value]
			)
		);

		console.log('Form Data Submitted:', upperCaseFormData);

		// Save registration data to localStorage
		localStorage.setItem('isRegistered', 'true');
		localStorage.setItem('userData', JSON.stringify(upperCaseFormData));

		navigate('/exams');
	};

	function formatDate(date) {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
		const dayOfWeek = days[date.getDay()];
		const day = String(date.getDate()).padStart(2, '0');
		const month = months[date.getMonth()]; // Months are zero-based
		const year = date.getFullYear();
	
		return `${dayOfWeek}, ${month} ${day} ${year}`;
	}

	return (
		<>
			<div className="titleHead">
				{/* <h1 className="">Kolehiyo ng Subic</h1> */}
				<p>Entrance Exam</p>
			</div>
			<form onSubmit={handleSubmit} className="mainEntry">
				<div className="col1">
					<div>
						<label>Reg. No</label>
						<input
							type="text"
							name="regNo"
							placeholder="e.g. 20-4567"
							value={formData.regNo}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Full Name</label>
						<input
							type="text"
							name="fullName"
							placeholder="e.g. Dela Cruz, Juan, M."
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Date</label>
						<input
							type="text"
							name="Date"
							value={formData.Date}
							onChange={handleChange}
							disabled
						/>
					</div>
					<div>
						<label>Sex</label>
						<select
							name="genderSelect"
							id="genderSelect"
							onChange={handleChange}
							value={formData.genderSelect}
							required>
							<option value="" disabled>
								Select Sex
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div>
						<label>Address</label>
						<input
							type="text"
							name="address"
							placeholder="e.g. 0123 Rizal St. Matain, Subic, Zambales"
							value={formData.address}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Date of Birth</label>
						<input
							type="text"
							name="birthday"
							placeholder="MM/DD/YYYY"
							value={formData.birthday}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Place of Birth</label>
						<input
							type="text"
							name="birthplace"
							placeholder="Matain, Subic, Zambales"
							value={formData.birthplace}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="col2">
					<div>
						<label>Contact No</label>
						<input
							type="number"
							name="contactNo"
							placeholder="e.g. 09123456789"
							value={formData.contactNo}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Guardian/Parent Name</label>
						<input
							type="text"
							name="guardianName"
							placeholder="e.g. Juan Dela Cruz"
							value={formData.guardianName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label>Last School Attended</label>
						<input
							type="text"
							name="lastSchool"
							value={formData.lastSchool}
							onChange={handleChange}
							placeholder="Name of Previous School"
							required
						/>
					</div>
					<div>
						<label>Last School Address</label>
						<input
							type="text"
							name="lastSchoolAddress"
							value={formData.lastSchoolAddress}
							onChange={handleChange}
							placeholder="Address of Previous School"
							required
						/>
					</div>
					<div>
						<label>1st Choice Course</label>
						<select
							name="course1st"
							value={formData.course1st}
							onChange={handleChange}
							required>
							<option value="" disabled>
								Select Course
							</option>
							<option value="Course 1">BSBA HRM</option>
							<option value="Course 2">BSBA FM</option>
							<option value="Course 3">BSA</option>
							<option value="Course 4">BSCS</option>
							<option value="Course 4">BSED MATH & FIL</option>
							<option value="Course 4">BSED SOCSTUD</option>
							<option value="Course 4">BEED</option>
							<option value="Course 4">CPE</option>
							<option value="Course 4">BSHM</option>
						</select>
					</div>
					<div>
						<label>2nd Choice Course</label>
						<select
							name="course2nd"
							value={formData.course2nd}
							onChange={handleChange}
							required>
							<option value="" disabled>
								Select Course
							</option>
							<option value="Course 1">BSBA HRM</option>
							<option value="Course 2">BSBA FM</option>
							<option value="Course 3">BSA</option>
							<option value="Course 4">BSCS</option>
							<option value="Course 4">BSED MATH & FIL</option>
							<option value="Course 4">BSED SOCSTUD</option>
							<option value="Course 4">BEED</option>
							<option value="Course 4">CPE</option>
							<option value="Course 4">BSHM</option>						</select>
					</div>
					<div>
						<label>Course Taken (Transferee Only)</label>
						<input
							type="text"
							name="transfereeCourse"
							placeholder="Name of Course Taken"
							value={formData.transfereeCourse}
							onChange={handleChange}
						/>
					</div>
				</div>
				<motion.button type="submit" whileHover={{scale:1.05}} whileTap={{scale:1}}>Register</motion.button>
			</form>
		</>
	);
};

export default ExamEntry;
