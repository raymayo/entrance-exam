import React, { useState, useEffect } from 'react';

const Exam = ({ examName }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const localStorageKey = `answers-${examName}`;
  const localStorageQuestionsKey = `questions-${examName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedQuestions = JSON.parse(localStorage.getItem(localStorageQuestionsKey));
        if (storedQuestions) {
          setQuestions(storedQuestions);
          const savedAnswers = JSON.parse(localStorage.getItem(localStorageKey)) || [];
          setAnswers(savedAnswers.length === storedQuestions.length ? savedAnswers : new Array(storedQuestions.length).fill(''));
        } else {
          const response = await fetch(`/src/questions/${examName}.json`); // Adjust path as per your project structure
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();

          // Shuffle questions and options
          const shuffledQuestions = shuffleArray(data.questions.map(question => ({
            ...question,
            options: shuffleArray(question.options)
          })));

          setQuestions(shuffledQuestions);
          localStorage.setItem(localStorageQuestionsKey, JSON.stringify(shuffledQuestions)); // Save questions to localStorage

          // Initialize answers array
          setAnswers(new Array(shuffledQuestions.length).fill(''));
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
  }, [examName]);

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
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div>
      <h2>{examName} Questions</h2>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${examName}-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswerSelect(index, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <button onClick={handleSubmit}>Submit Answers</button>
      {score > 0 && (
        <p>Your score: {score} out of {questions.length}</p>
      )}
    </div>
  );
};

export default Exam;
