/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { MdFileDownload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Print = () => {
	const contentRef = useRef();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleConfirm = () => {
		const element = contentRef.current;

		const options = {
			margin: 0,
			filename: `${userData.fullName}_Entrance_Exam.pdf`,
			image: { type: 'png', quality: 3 },
			html2canvas: { scale: 1 },
			jsPDF: { unit: 'in', format: 'legal' },
		};

		html2pdf().set(options).from(element).save();
		// window.print()
		localStorage.clear();
		console.log('All items cleared');
		navigate('/');
		console.log('Confirmed!');
		handleCloseModal();
	};

	const userData = JSON.parse(localStorage.getItem('userData')) || {};
	console.log(userData);

	const generatePdf = () => {
		handleOpenModal();
	};

	console.log('NEW USER');
	//  localStorage.clear();

	// window.onload(console.log('hello'))

	return (
		<>
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirm}
				title="Are you sure?"
				message="This will generate the pdf file of the entrance exam result. Please click confirm if everything is good to go."
			/>
			<div id="printContainer" ref={contentRef}>
				<div id="headerTitle">
					<h1>
						<img src="/images.jfif" id="schoolLogo" />
						KOLEHIYO NG SUBIC
					</h1>
					<h3 className="">Subic, Zambales</h3>
					<h2 className="regTitle text-xl">REGISTRATION FORM</h2>
				</div>
				<div id="infoContainer">
					<p id="name">
						Name: <span className="userData">{userData.fullName}</span>
					</p>
					<p id="sex">
						Sex: <span className="userData">{userData.genderSelect}</span>
					</p>
					<p id="address">
						Address: <span className="userData">{userData.address}</span>
					</p>
					<p id="birthday">
						Date of Birth: <span className="userData">{userData.birthday}</span>
					</p>
					<p id="birthplace">
						Place of Birth:{' '}
						<span className="userData">{userData.birthplace}</span>
					</p>
					<p id="contactNum">
						Contact Number:{' '}
						<span className="userData">{userData.contactNo}</span>
					</p>
					<p id="guardian">
						Name of Guardian:{' '}
						<span className="userData">{userData.guardianName}</span>
					</p>
					<p id="schoolLast">
						School Last Attended:{' '}
						<span className="userData">{userData.lastSchool}</span>
					</p>
					<p id="schoolLastAdd">
						Address of School Last Attended:{' '}
						<span className="userData">{userData.lastSchoolAddress}</span>
					</p>
					<p id="courseTaken">
						Course Taken(for Transferees only):{' '}
						<span className="userData">{userData.transfereeCourse}</span>
					</p>
					<p id="courseInfo">Course to be taken in this Institution:</p>
					<p id="courseOne">
						First Choice Course:{' '}
						<span className="userData">{userData.course1st}</span>
					</p>
					<p id="courseTwo">
						Second Choice Course:{' '}
						<span className="userData">{userData.course2nd}</span>
					</p>
				</div>
				<div id="reqBox">
					<div id="year1">
						<h3 className='font-semibold'>INCOMING FIRST YEAR</h3>
						<div className="reqList">
							<p>( ) High School Card Form 138</p>
							<p>( ) Certificate of Good Moral Character</p>
							<p>( ) Barangay Certificate oF Residency</p>
							<p>( ) Two (2) 2X2 Colored Pictures</p>
							<p>
								( ) PSA Certified Birth Certificate(1 Original & 1 Photocopy)
							</p>
							<p>( ) Two (2) 2X2 Long Brown Envelope</p>
						</div>
					</div>
					<div id="transf">
						<h3 className='font-semibold'>FOR TRANSFEREE</h3>
						<div className="reqList">
							<p>( ) Transcript of record/ Certificate of Grade</p>
							<p>( ) Honorable Dismissal</p>
							<p>( ) Barangay Certificate of Residency</p>
							<p>( ) Two (2) 2x2 Colored Picture</p>
							<p>
								( ) PSA Certified Birth Certificate(1 Original & 1 Photocopy)
							</p>
							<p>( ) Two (2) 2X2 Long Brown Envelope</p>
						</div>
					</div>
					<div className="nameSig">
						<p className="namePlate">Ms. Thelma Laxamana</p>
						<p className="titlePlate">Registrar</p>
					</div>
				</div>

				<div className="letterScore">
					<p id="date">
						DATE: <span className="userData">{userData.Date}</span>
					</p>
					<p id="letter1">
						Mr./Ms <span className="userData">{userData.fullName}</span> is
						granted to take the Entrance Examination on{' '}
						<span className="userData">{userData.Date}</span> at{' '}
						<span>COMLAB2</span>{' '}
					</p>
					<div className="nameSig">
						<p className="namePlate">Ms. Thelma Laxamana</p>
						<p className="titlePlate">Registrar</p>
					</div>
				</div>

				<h4 className='font-semibold text-lg'>Entrance Examination Result</h4>
				<div id="examResult">
					<div>
						<p>
							<span className="userData">{userData.english || 'No Score'}</span>{' '}
							English
						</p>
						<p>
							<span className="userData">{userData.math || 'No Score'}</span>{' '}
							Mathematics
						</p>
						<p>
							<span className="userData">
								{userData.filipino || 'No Score'}
							</span>{' '}
							Filipino
						</p>
					</div>
					<div>
						<p>
							<span className="userData">{userData.science || 'No Score'}</span>{' '}
							Science
						</p>
						<p>
							<span className="userData">
								{userData.socialstudy || 'No Score'}
							</span>{' '}
							Social Studies
						</p>
						<h4>
							TOTAL SCORE:{' '}
							<span className="userData">
								{userData.english +
									userData.math +
									userData.filipino +
									userData.science +
									userData.socialstudy || 'No Score'}
							</span>
						</h4>
					</div>
					<div className="nameSig sigBox">
						<p className="namePlate sig"></p>
						<p className="titlePlate">Signature</p>
					</div>
					<p>Noted by:</p>
					<div className="nameSig sirPabs">
						<p className="namePlate">PABLO MENDIOGARIN, MAED-GC</p>
						<p className="titlePlate">Guidance Councilor</p>
					</div>
				</div>
			</div>
			<motion.button
				className="p-2 m-2 text-black"
				id="pdf"
				onClick={generatePdf}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 1 }}>
				<MdFileDownload onClick={generatePdf} size={25} />
				Download
			</motion.button>
		</>
	);
};

export default Print;
