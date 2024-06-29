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

    const updateScores = () => {
      setScores({
        math: getScore('Math'),
        english: getScore('English'),
        filipino: getScore('Filipino'),
        science: getScore('Science')
      });
    };

    updateScores(); // Initial update
    const interval = setInterval(updateScores, 1000); // Update scores every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h2>Exam Table</h2>
      <p>This is the exam table page.</p>
      <div>
        <Link to="/math">Math</Link>
        {scores.math !== null && <span> - Score: {scores.math}/20</span>}
      </div>
      <div>
        <Link to="/english">English</Link>
        {scores.english !== null && <span> - Score: {scores.english}/20</span>}
      </div>
      <div>
        <Link to="/filipino">Filipino</Link>
        {scores.filipino !== null && <span> - Score: {scores.filipino}/20</span>}
      </div>
      <div>
        <Link to="/science">Science</Link>
        {scores.science !== null && <span> - Score: {scores.science}/20</span>}
      </div>
    </div>
  );
};

export default ExamTable;
