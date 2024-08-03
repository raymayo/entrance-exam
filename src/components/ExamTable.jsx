import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMath } from 'react-icons/bi';
import { BiAtom } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { PiSunHorizonFill } from "react-icons/pi";

const ExamTable = () => {
	const [scores, setScores] = useState({
		math: null,
		english: null,
		filipino: null,
		science: null,
	});

	useEffect(() => {
		const getScore = (examName) => {
			const savedAnswers =
				JSON.parse(localStorage.getItem(`answers-${examName}`)) || [];
			const questions =
				JSON.parse(localStorage.getItem(`questions-${examName}`)) || [];
			let score = 0;

			questions.forEach((question, index) => {
				if (savedAnswers[index] === question.answer) {
					score++;
				}
			});

			return score;
		};

		setScores({
			math: getScore('math'),
			english: getScore('english'),
			filipino: getScore('filipino'),
			science: getScore('science'),
		});
	}, []);

	// Retrieve and display user data
	const userData = JSON.parse(localStorage.getItem('userData')) || {};

	console.log(userData);

	return (
		<div className="mainTable">
			<h2>Student Info & Exam Table</h2>
			<div className="userInfo">
				<p>
					<span>Register No:</span> {userData.regNo}
				</p>

				<p>
					<span>Full Name:</span> {userData.fullName}
				</p>

				<p>
					<span>Date:</span> {userData.Date}
				</p>

				<p>
					<span>Sex:</span> {userData.genderSelect}
				</p>
				<p>
					<span>Address:</span> {userData.address}
				</p>
				<p>
					<span>Birthday:</span> {userData.birthday}
				</p>
				<p>
					<span>Birthplace:</span> {userData.birthplace}
				</p>
				<p>
					<span>Contact No:</span> {userData.contactNo}
				</p>
				<p>
					<span>Parent/Guardian Name:</span> {userData.guardianName}
				</p>
				<p>
					<span>Last School Attended:</span> {userData.lastSchool}
				</p>
				<p>
					<span>Last School Address:</span> {userData.lastSchoolAddress}
				</p>
				<p>
					<span>1st Choice Course:</span> {userData.course1st}
				</p>
				<p>
					<span>2st Choice Course:</span> {userData.course2nd}
				</p>
				<p>
					<span>Course Taken (Transferee Only):</span>{' '}
					{userData.transfereeCourse}
				</p>
			</div>
			<div className="examLinks">
				<div className='math'>
					<BiMath size={50} />
					<h1>Math Exam</h1>
					{scores.math !== null && <p>Score: {scores.math}</p>}
					<Link to="/exams/math">Take Exam</Link>
				</div>
				<div className='eng'>
					<TbMessageLanguage size={50} />
					<h1>English Exam</h1>
					{scores.english !== null && <p>Score: {scores.english}</p>}
					<Link to="/exams/english">Take Exam</Link>
				</div>
				<div className='fil'>
					<PiSunHorizonFill size={50} />
					<h1>Filipino Exam</h1>
					{scores.filipino !== null && <p> Score: {scores.filipino}</p>}
					<Link to="/exams/filipino">Take Exam</Link>
				</div>
				<div className='sci'>
					<BiAtom size={50} />
					<h1>Science Exam</h1>
					{scores.science !== null && <p>Score: {scores.science}</p>}
					<Link to="/exams/science">Take Exam</Link>
				</div>
			</div>
		</div>
	);
};

export default ExamTable;
