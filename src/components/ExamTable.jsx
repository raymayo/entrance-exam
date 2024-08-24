/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMath } from 'react-icons/bi';
import { BiAtom } from 'react-icons/bi';
import { TbMessageLanguage } from 'react-icons/tb';
import { PiSunHorizonFill } from 'react-icons/pi';
import { FaPeopleGroup } from 'react-icons/fa6';
// import ExelEditor from './ExelEditor'
import { motion } from 'framer-motion';

const ExamTable = () => {
	const [scores, setScores] = useState({
		math: null,
		english: null,
		filipino: null,
		science: null,
		socialstudy: null,
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
			socialstudy: getScore('socialstudy'),
		});
	}, []);

	// Retrieve and display user data
	const userData = JSON.parse(localStorage.getItem('userData')) || {};

	// console.log(userData);

	const confirm = () => {
		const isConfirmed = window.confirm(
			'Are you sure you want to submit your data and scores?'
		);

		if (!isConfirmed) {
			return;
		}
	};

	return (
		<div className="mainTable">
			{/* <h2>Student Info & Exam Table</h2> */}
			<div className="userInfo bg-white border border-zinc-200 shadow rounded-xl text-zinc-900 p-6 gap-3 mb-6">
				<h1 className='font-semibold text-2xl'>Student Information</h1>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Register No:</label>
					<p className='font-medium'>{userData.regNo}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Full Name:</label>
					<p className='font-medium'>{userData.fullName}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Sex:</label>
					<p className='font-medium'>{userData.genderSelect}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Address:</label>
					<p className='font-medium'>{userData.address}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Birthday:</label>
					<p className='font-medium'>{userData.birthday}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Birthplace:</label>
					<p className='font-medium'>{userData.birthplace}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Contact No:</label>
					<p className='font-medium'>{userData.contactNo}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Parent/Guardian Name:</label>
					<p className='font-medium'>{userData.guardianName}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Last School Attended:</label>
					<p className='font-medium'>{userData.lastSchool}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Last School Address:</label>
					<p className='font-medium'>{userData.lastSchoolAddress}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>1st Choice Course:</label>
					<p className='font-medium'>{userData.course1st}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>2nd Choice Course:</label>
					<p className='font-medium'>{userData.course2nd}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Course Taken (Transferee Only):</label>
					<p className='font-medium'>{userData.transfereeCourse}</p>
				</div>
				<div className=''>
					<label className='text-zinc-900 block text-sm font-base'>Date Submitted:</label>
					<p className='font-medium'>{userData.Date}</p>
				</div>
			</div>
			<div className="examLinks gap-6">
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3">
					<BiMath size={50} />
					<h1 className='font-semibold text-lg'>Math</h1>
					{scores.math !== null && <p>Score: {scores.math}</p>}
					<motion.span className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100'>
						<Link to="/exams/math">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3">
					<TbMessageLanguage size={50} />
					<h1 className='font-semibold text-lg'>English</h1>
					{scores.english !== null && <p>Score: {scores.english}</p>}
					<motion.span className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100'>
						<Link to="/exams/english">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3">
					<PiSunHorizonFill size={50} />
					<h1 className='font-semibold text-lg'>Filipino</h1>
					{scores.filipino !== null && <p> Score: {scores.filipino}</p>}
					<motion.span className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100'>
						<Link to="/exams/filipino">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3">
					<BiAtom size={50} />
					<h1 className='font-semibold text-lg'>Science</h1>
					{scores.science !== null && <p>Score: {scores.science}</p>}
					<motion.span className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100'>
						<Link to="/exams/science">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3">
					<FaPeopleGroup size={50} />
					<h1 className='font-semibold text-lg'>Social Study</h1>
					{scores.socialstudy !== null && <p>Score: {scores.socialstudy}</p>}
					<motion.span className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100'>
						<Link to="/exams/socialstudy">Take Exam</Link>
					</motion.span>
				</div>
			</div>
			<motion.span
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 1 }}
				id="submitExamBox" className='mt-6 w-3/5 bg-zinc-900 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2'>
				<Link to="/print" id="submitExam" onClick={confirm}>
					Submit Data & Scores
				</Link>
			</motion.span>
		</div>
	);
};

export default ExamTable;
