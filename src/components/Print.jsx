// eslint-disable-next-line no-unused-vars
import React from 'react';

const Print = () => {
	const userData = JSON.parse(localStorage.getItem('userData')) || {};

	console.log(userData);
	return (
		<div id="printContainer">
			<div id="headerTitle">
				<img src="/images.jfif" id="schoolLogo" />
				<h1>Kolehiyo Ng Subic</h1>
			</div>
            <h3>Subic, Zambales</h3>
                <h2>REGISTRATION FORM</h2>
                <div id="infoContainer">
                    <p id='name'>Name:</p>
                    <p id='sex'>Sex:</p>
                    <p id='address'>Address:</p>
                    <p id='birthday'>Date of Birth:</p>
                    <p id='birthplace'>Place of Birth:</p>
                    <p id='contactNum'>Contact Number:</p>
                    <p id='guardian'>Name of Guardian:</p>
                    <p id='schoolLast'>School Last Attended:</p>
                    <p id='schoolLastAdd'>Address of School Last Attended:</p>
                    <p id='courseTaken'>Course Taken(for Transferees only):</p>
                    <p id='courseInfo'>Course to be taken in this Institution:</p>
                    <p id='courseOne'>First Choice Course:</p>
                    <p id='courseTwo'>Second Choice Course:</p>
                </div>
                <div id="reqBox">
                    <div id="year1">
                        <h3>INCOMING FIRST YEAR</h3>
                        <div className="reqList">
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div id="transf">
                        <h3>FOR TRANSFEREE</h3>
                        <div className="reqList">
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div className="nameSig">
                    <p className="namePlate">Ms. Thelma Laxamana</p>
                    <p className="titlePlate">Registrar</p>
                </div>
                </div>

            <div className="letterScore">
                <p id='date'>DATE: {userData.Date}</p>
                <br />
                <p id='letter1'>Mr./Ms {userData.fullName} is granted to take the Entrance Examination on {userData.Date} at COMLAB2 </p>
                <div className="nameSig">
                    <p className="namePlate">Ms. Thelma Laxamana</p>
                    <p className="titlePlate">Registrar</p>
                </div>
            </div>

                <h4>asda</h4>
            <div id="examResult">
                <div>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
                <div>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
                <div className="nameSig">
                    <p className="namePlate">Ms. Thelma Laxamana</p>
                    <p className="titlePlate">Registrar</p>
                </div>
                <p>Noted by:</p>
                <div className="nameSig">
                    <p className="namePlate">PABLO MENDIOGARIN, MAED-GC</p>
                    <p className="titlePlate">Guidance Councilor</p>
                </div>
            </div>
		</div>
	);
};

export default Print;
