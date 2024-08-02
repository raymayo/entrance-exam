import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExamTable = () => {
  const [scores, setScores] = useState({
    math: null,
    english: null,
    filipino: null,
    science: null
  });

  useEffect(() => {
    const getScore = (examName) => {
      const savedAnswers = JSON.parse(localStorage.getItem(`answers-${examName}`)) || [];
      const questions = JSON.parse(localStorage.getItem(`questions-${examName}`)) || [];
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
      science: getScore('science')
    });
  }, []);

  // Retrieve and display user data
  const userData = JSON.parse(localStorage.getItem('userData')) || {};

  return (
    <div className='mainTable'>
      <h2>Exam Table</h2>
      <div className="userInfo">
      
        <p><span>Register No:</span> {userData.regNo}</p>
       
        <p><span>First Name:</span> {userData.firstName}</p>
        
        <p><span>Middle Name:</span> {userData.middleName}</p>
        
        <p><span>Last Name:</span> {userData.surName}</p>
      </div>
      <div className="examLinks">
      <div>
        <Link to="/exams/math">Math</Link>
        {scores.math !== null && <span> - Score: {scores.math}</span>}
      </div>
      <div>
        <Link to="/exams/english">English</Link>
        {scores.english !== null && <span> - Score: {scores.english}</span>}
      </div>
      <div>
        <Link to="/exams/filipino">Filipino</Link>
        {scores.filipino !== null && <span> - Score: {scores.filipino}</span>}
      </div>
      <div>
        <Link to="/exams/science">Science</Link>
        {scores.science !== null && <span> - Score: {scores.science}</span>}
      </div>
      </div>
    </div>
  );
};

export default ExamTable;
