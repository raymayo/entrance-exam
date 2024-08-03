import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

	const [date, setDate] = useState(formatDate(new Date()));

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
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		return `${month}/${day}/${year}`; // Customize the format as needed
	}

	return (
		<>
			<div className="titleHead">
				<h1 className="">Kolehiyo ng Subic</h1>
				<p>Entrance Exam</p>
			</div>
			<form onSubmit={handleSubmit} className="mainEntry">
				<div className="col1">
					<div>
						<label>Reg. No</label>
						<input
							type="number"
							name="regNo"
							placeholder="e.g. 0123-456"
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
							placeholder="MM/DD/YY"
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
							placeholder="e.g. Dela Cruz, Juan, M."
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
							<option value="Course 1">Course 1</option>
							<option value="Course 2">Course 2</option>
							<option value="Course 3">Course 3</option>
							<option value="Course 4">Course 4</option>
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
							<option value="Course 1">Course 1</option>
							<option value="Course 2">Course 2</option>
							<option value="Course 3">Course 3</option>
							<option value="Course 4">Course 4</option>
						</select>
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
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default ExamEntry;
