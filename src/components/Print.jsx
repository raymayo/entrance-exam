/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { MdFileDownload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Print = () => {

    const contentRef = useRef();
	const navigate = useNavigate();

	const userData = JSON.parse(localStorage.getItem('userData')) || {};
	console.log(userData);

    const generatePdf = () =>{
    const element = contentRef.current;

    const options = {
        margin:0,
        filename:`${userData.fullName}_Entrance_Exam.pdf`,
        image:{type:'png',quality:1.0},
        html2canvas:{scale:3,useCORS:true},
        jsPDF:{unit:'in', format:'a4', orientation:'portrait'}
    }

    html2pdf().set(options).from(element).save();

            localStorage.clear();
          console.log('All items cleared');
          navigate('/');
    }

	return (
        <>
		<div id="printContainer" ref={contentRef}>
			<div id="headerTitle">
				<h1><img src="/images.jfif" id="schoolLogo" />Kolehiyo Ng Subic</h1>
            <h3>Subic, Zambales</h3>
                <h2 className='regTitle'>REGISTRATION FORM</h2>
			</div>
                <div id="infoContainer">
                    <p id='name'>Name: <span>{userData.fullName}</span></p>
                    <p id='sex'>Sex: <span>{userData.genderSelect}</span></p>
                    <p id='address'>Address: <span>{userData.address}</span></p>
                    <p id='birthday'>Date of Birth: <span>{userData.birthday}</span></p>
                    <p id='birthplace'>Place of Birth: <span>{userData.birthplace}</span></p>
                    <p id='contactNum'>Contact Number: <span>{userData.contactNo}</span></p>
                    <p id='guardian'>Name of Guardian: <span>{userData.guardianName}</span></p>
                    <p id='schoolLast'>School Last Attended: <span>{userData.lastSchool}</span></p>
                    <p id='schoolLastAdd'>Address of School Last Attended: <span>{userData.lastSchoolAddress}</span></p>
                    <p id='courseTaken'>Course Taken(for Transferees only):<span>{userData.transfereeCourse}</span></p>
                    <p id='courseInfo'>Course to be taken in this Institution:</p>
                    <p id='courseOne'>First Choice Course: <span>{userData.course1st}</span></p>
                    <p id='courseTwo'>Second Choice Course: <span>{userData.course2nd}</span></p>
                </div>
                <div id="reqBox">
                    <div id="year1">
                        <h3>INCOMING FIRST YEAR</h3>
                        <div className="reqList">
                            <p>( ) High School Card Form 138</p>
                            <p>( ) Certificate of Good Moral Character</p>
                            <p>( ) Barangay Certificate oF Residency</p>
                            <p>( ) Two (2) 2X2 Colored Pictures</p>
                            <p>( ) PSA Certified Birth Certificate(1 Original & 1 Photocopy)</p>
                            <p>( ) Two (2) 2X2 Long Brown Envelope</p>
                        </div>
                    </div>
                    <div id="transf">
                        <h3>FOR TRANSFEREE</h3>
                        <div className="reqList">
                            <p>( ) Transcript of record/ Certificate of Grade</p>
                            <p>( ) Honorable Dismissal</p>
                            <p>( ) Barangay Certificate of Residency</p>
                            <p>( ) Two (2) 2x2 Colored Picture</p>
                            <p>( ) PSA Certified Birth Certificate(1 Original & 1 Photocopy)</p>
                            <p>( ) Two (2) 2X2 Long Brown Envelope</p>
                        </div>
                    </div>
                    <div className="nameSig">
                    <p className="namePlate">Ms. Thelma Laxamana</p>
                    <p className="titlePlate">Registrar</p>
                </div>
                </div>

            <div className="letterScore">
                <p id='date'>DATE: <span>{userData.Date}</span></p>
                <p id='letter1'>Mr./Ms <span>{userData.fullName}</span> is granted to take the Entrance Examination on <span>{userData.Date}</span> at <span>COMLAB2</span> </p>
                <div className="nameSig">
                    <p className="namePlate">Ms. Thelma Laxamana</p>
                    <p className="titlePlate">Registrar</p>
                </div>
            </div>

                <h4>Entrance Examination Result</h4>
            <div id="examResult">
                <div>
                    <p><span>{userData.english || 'No Score'}</span> English</p>
                    <p><span>{userData.math || 'No Score'}</span> Mathematics</p>
                    <p><span>{userData.filipino || 'No Score'}</span> Filipino</p>
                </div>
                <div>
                    <p><span>{userData.science || 'No Score'}</span> Science</p>
                    <p>0 Social Studies</p>
                    <h4>TOTAL SCORE: <span>{userData.english + userData.math + userData.filipino + userData.science || 'No Score'}</span></h4>
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
        <button id='pdf' onClick={generatePdf}><MdFileDownload onClick={generatePdf} size={25}/>Download</button>
        
        </>
	);
};

export default Print;
