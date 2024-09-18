/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

import { Link } from 'react-router-dom';
import { BiMath } from 'react-icons/bi';
import { BiAtom } from 'react-icons/bi';
import { TbMessageLanguage } from 'react-icons/tb';
import { PiSunHorizonFill } from 'react-icons/pi';
import { FaPeopleGroup } from 'react-icons/fa6';
// import ExelEditor from './ExelEditor'
import { motion } from 'framer-motion';



const ExamTable = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleConfirm = () => {
		console.log('Confirmed!');
		handleCloseModal();
		navigate('/print');
	};
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
		handleOpenModal();
	};

	return (
		<div className="mainTable grid place-items-center w-full">
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirm}
				title="Are you sure?"
				message="Please make sure you have taken all exams. If so, click confirm to generate your entrance exam file"
			/>
			{/* <h2>Student Info & Exam Table</h2> */}
			<div className="userInfo w-3/5 bg-white border border-zinc-200 shadow rounded-xl text-zinc-900 p-6 gap-3 mb-6 lg:w-5/6 xl:w-3/5 lg:bg-white md:w-5/6 ">
				<h1 className="font-semibold text-2xl">Student Information</h1>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Register No:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.regNo}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Full Name:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.fullName}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">Sex:</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.genderSelect}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Address:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.address}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Birthday:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.birthday}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Birthplace:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.birthplace}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Contact No:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.contactNo}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Parent/Guardian Name:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.guardianName}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Last School Attended:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.lastSchool}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Last School Address:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.lastSchoolAddress}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						1st Choice Course:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.course1st}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						2nd Choice Course:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.course2nd}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Course Taken (Transferee Only):
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.transfereeCourse}</p>
				</div>
				<div className="">
					<label className="text-zinc-900 block text-sm font-base md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
						Date Submitted:
					</label>
					<p className="font-medium md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{userData.Date}</p>
				</div>
			</div>
			<div className="examLinks gap-6 w-3/5 lg:w-5/6 xl:w-3/5 md:w-5/6">
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3 bg-white">
					<BiMath size={50} />
					<h1 className="font-semibold text-lg md:text-sm lg:text-base">Math</h1>
					{scores.math !== null && <p>Score: {scores.math}</p>}
					<motion.span >
						<Link to="/exams/math" className="cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100 md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3 bg-white">
					<TbMessageLanguage size={50} />
					<h1 className="font-semibold text-lg md:text-sm lg:text-base">English</h1>
					{scores.english !== null && <p>Score: {scores.english}</p>}
					<motion.span>
						<Link to="/exams/english" className='cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100 md:text-xs lg:text-xs xl:text-sm 2xl:text-sm'>Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3 bg-white">
					<PiSunHorizonFill size={50} />
					<h1 className="font-semibold text-lg md:text-sm lg:text-base">Filipino</h1>
					{scores.filipino !== null && <p> Score: {scores.filipino}</p>}
					<motion.span >
						<Link to="/exams/filipino" className="cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100 md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3 bg-white">
					<BiAtom size={50} />
					<h1 className="font-semibold text-lg md:text-sm lg:text-base">Science</h1>
					{scores.science !== null && <p>Score: {scores.science}</p>}
					<motion.span >
						<Link to="/exams/science" className="cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100 md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">Take Exam</Link>
					</motion.span>
				</div>
				<div className="border border-zinc-200 shadow p-4 rounded-xl text-zinc-900 gap-3 bg-white">
					<FaPeopleGroup size={50} />
					<h1 className="font-semibold text-lg md:text-sm lg:text-base">Social Study</h1>
					{scores.socialstudy !== null && <p>Score: {scores.socialstudy}</p>}
					<motion.span >
						<Link to="/exams/socialstudy" className="cursor-pointer col-span-2 border border-zinc-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm h-9 px-4 py-2 hover:bg-zinc-100 md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">Take Exam</Link>
					</motion.span>
				</div>
			</div>
			<motion.span
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 1 }}
				id="submitExamBox"
				className="mt-6 w-3/5 lg:w-5/6 xl:w-3/5 lg:bg-white md:w-5/6 md:bg-red-500">
				<button  id="submitExam" className='w-full bg-green-400 text-green-950 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2' onClick={confirm}>
					Submit Data & Scores
				</button>
			</motion.span>
		</div>
	);
};

export default ExamTable;
