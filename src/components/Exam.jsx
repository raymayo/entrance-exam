/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Exam = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleConfirm = () => {
		let newScore = 0;
		questions.forEach((question, index) => {
			if (answers[index] === question.answer) {
				newScore++;
			}
		});
		setScore(newScore);
		localStorage.setItem(localStorageSubmissionKey, 'true'); // Mark the exam as submitted

		// Save the score in localStorage
		const existingUserData = JSON.parse(localStorage.getItem('userData')) || {};
		const updatedUserData = {
			...existingUserData,
			[examName]: newScore, // Save the score under the exam name key
		};
		localStorage.setItem('userData', JSON.stringify(updatedUserData));
		navigate('/exams');

		console.log('Confirmed!');
		handleCloseModal();
	};

	const { examName } = useParams();
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [score, setScore] = useState(null); // Changed from 0 to null
	const localStorageKey = `answers-${examName}`;
	const localStorageQuestionsKey = `questions-${examName}`;
	const localStorageSubmissionKey = `submitted-${examName}`;

	useEffect(() => {
		const fetchData = async () => {
			const isSubmitted = localStorage.getItem(localStorageSubmissionKey);
			if (isSubmitted) {
				navigate('/exams');
				return;
			}

			try {
				const storedQuestions = JSON.parse(
					localStorage.getItem(localStorageQuestionsKey)
				);
				if (storedQuestions) {
					setQuestions(storedQuestions);
					const savedAnswers =
						JSON.parse(localStorage.getItem(localStorageKey)) || [];
					setAnswers(
						savedAnswers.length === storedQuestions.length
							? savedAnswers
							: new Array(storedQuestions.length).fill('')
					);
				} else {
					const response = await fetch(`/src/questions/${examName}.json`); // Adjust path as per your project structure
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					console.log(response);
					const data = await response.json();

					// Shuffle questions and options
					const shuffledQuestions = shuffleArray(
						data.questions.map((question) => ({
							...question,
							options: shuffleArray(question.options),
						}))
					);

					setQuestions(shuffledQuestions);
					localStorage.setItem(
						localStorageQuestionsKey,
						JSON.stringify(shuffledQuestions)
					); // Save questions to localStorage

					// Initialize answers array
					setAnswers(new Array(shuffledQuestions.length).fill(''));
				}
			} catch (error) {
				console.error('Error fetching quiz data:', error);
			}
		};

		fetchData();
	}, [examName, navigate]);

	const shuffleArray = (array) => {
		// Shuffling algorithm (Fisher-Yates shuffle)
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleAnswerSelect = (questionIndex, selectedOption) => {
		const newAnswers = [...answers];
		newAnswers[questionIndex] = selectedOption;
		setAnswers(newAnswers);

		// Save answers to localStorage
		localStorage.setItem(localStorageKey, JSON.stringify(newAnswers));
	};

	const handleSubmit = () => {
		handleOpenModal();
	};

	return (
		<div className="examBox w-full p-4">
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirm}
				title="Are you sure?"
				message="Please make sure you have answered every question. If so, please click confirm to move on to another exam."
			/>
			<h2 className="text-zinc-900 text-2xl font-semibold">
				{examName.charAt(0).toUpperCase() + examName.slice(1)} Questions
			</h2>
			<ol className="questionContainer p-3 gap-6 w-1/2 md:w-5/6 lg:w-5/6 xl:1/2 2xl:w-1/2">
				{questions.map((question, index) => (
					<li
						key={index}
						className="questionBox border border-zinc-200 rounded-md shadow p-4 text-zinc-900 bg-white">
						<p className="font-semibold mb-4">
							{index + 1}. {question.question}
						</p>
						<ul className="gap-3">
							{question.options.map((option, idx) => (
								<motion.li key={idx} className="" whileTap={{ scale: 0.95 }}>
									<label className="flex flex-col justify-start items-center cursor-pointer box-border">
										<input
											className="hidden peer"
											type="radio"
											name={`question-${examName}-${index}`}
											value={option}
											checked={answers[index] === option}
											onChange={() => handleAnswerSelect(index, option)}
										/>
										<span className="w-full border-2 border-zinc-200 rounded p-1 pl-2 peer-checked:bg-green-500 peer-checked:bg-opacity-20 peer-checked:text-green-500 peer-checked:border-green-500 peer-checked:border-2 hover:text-gray-600 hover:bg-gray-100 font-medium">
											{option}
										</span>
									</label>
								</motion.li>
							))}
						</ul>
					</li>
				))}
				<button
					className="submitExam col-span-2 bg-green-400 text-green-950 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2"
					onClick={handleSubmit}>
					Submit Answers
				</button>
			</ol>
		</div>
	);
};

export default Exam;
