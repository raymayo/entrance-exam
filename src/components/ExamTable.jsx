import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ExamTable = () => {
	return (
		<div>
			<h2>Exam Table</h2>
			<p>This is the exam table page.</p>
			<div>
				<Link to="/math">Math</Link>
			</div>
			<div>
				<Link to="/english">English</Link>
			</div>
			<div>
				<Link to="/filipino">Filipino</Link>
			</div>
			<div>
				<Link to="/science">Science</Link>
			</div>
		</div>
	);
};

export default ExamTable;
