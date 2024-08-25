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
		<div id='entry'>
			<div className="titleHead text-zinc-900 my-4">
				<h1 className="text-4xl font-bold">KOLEHIYO NG SUBIC</h1>
				<p className='text-xl font-medium'>Entrance Exam</p>
			</div>
			<form onSubmit={handleSubmit} className="mainEntry">
				<div className="col1">
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Reg. No</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 text-zinc-900'
							type="text"
							name="regNo"
							placeholder="e.g. 20-4567"
							value={formData.regNo}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Full Name</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="fullName"
							placeholder="e.g. Dela Cruz, Juan, M."
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Date</label>
						<input className='w-full cursor-not-allowed bg-white text-zinc-400 border border-zinc-100 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black'
							type="text"
							name="Date"
							value={formData.Date}
							onChange={handleChange}
							disabled
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Sex</label>
						<select
						className="w-full bg-white border border-zinc-200 shadow-sm text-gray-900 rounded-md focus:border-black block text-base p-2 pl-3"
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
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Address</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="address"
							placeholder="e.g. 0123 Rizal St. Matain, Subic, Zambales"
							value={formData.address}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Date of Birth</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="birthday"
							placeholder="MM/DD/YYYY"
							value={formData.birthday}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Place of Birth</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
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
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Contact No</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="number"
							name="contactNo"
							placeholder="e.g. 09123456789"
							value={formData.contactNo}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Guardian/Parent Name</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="guardianName"
							placeholder="e.g. Juan Dela Cruz"
							value={formData.guardianName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Last School Attended</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="lastSchool"
							value={formData.lastSchool}
							onChange={handleChange}
							placeholder="Name of Previous School"
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Last School Address</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="lastSchoolAddress"
							value={formData.lastSchoolAddress}
							onChange={handleChange}
							placeholder="Address of Previous School"
							required
						/>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>1st Choice Course</label>
						<select
						className="w-full bg-white border border-zinc-200 shadow-sm text-gray-900 rounded-md focus:border-black block text-base p-2 pl-3"
							name="course1st"
							value={formData.course1st}
							onChange={handleChange}
							required>
							<option value="" disabled>
								Select Course
							</option>
							<option value="BSBA HRM">BSBA HRM</option>
							<option value="BSBA FM">BSBA FM</option>
							<option value="BSA">BSA</option>
							<option value="BSCS">BSCS</option>
							<option value="BSED MATH & FIL">BSED MATH & FIL</option>
							<option value="BSED SOCSTUD">BSED SOCSTUD</option>
							<option value="BEED">BEED</option>
							<option value="CPE">CPE</option>
							<option value="BSHM">BSHM</option>
						</select>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>2nd Choice Course</label>
						<select
						className="w-full bg-white border border-zinc-200 shadow-sm text-gray-900 rounded-md focus:border-black block text-base p-2 pl-3"
							name="course2nd"
							value={formData.course2nd}
							onChange={handleChange}
							required>
							<option value="" disabled>
								Select Course
							</option>
							<option value="BSBA HRM">BSBA HRM</option>
							<option value="BSBA FM">BSBA FM</option>
							<option value="BSA">BSA</option>
							<option value="BSCS">BSCS</option>
							<option value="BSED MATH & FIL">BSED MATH & FIL</option>
							<option value="BSED SOCSTUD">BSED SOCSTUD</option>
							<option value="BEED">BEED</option>
							<option value="CPE">CPE</option>
							<option value="BSHM">BSHM</option>					</select>
					</div>
					<div>
						<label className='text-zinc-900 block mb-1 text-sm font-medium'>Course Taken (Transferee Only)</label>
						<input className='w-full bg-white border border-zinc-200 p-2 pl-3 text-base rounded-md shadow-sm placeholder-zinc-500 focus:border focus:border-black text-zinc-900'
							type="text"
							name="transfereeCourse"
							placeholder="Course Taken from Previous School"
							value={formData.transfereeCourse}
							onChange={handleChange}
						/>
					</div>
				</div>
				<motion.button type="submit" whileHover={{scale:1.01}} whileTap={{scale:1}} className='col-span-2 bg-zinc-900 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2'>Register New Student</motion.button>
			</form>
		</div>
	);
};

export default ExamEntry;
