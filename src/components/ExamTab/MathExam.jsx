import React, { useState, useEffect } from 'react';

const MathExam = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/questions/math.json'); // Adjust path as per your project structure
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
        setAnswers(new Array(shuffledQuestions.length).fill(''));
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
  }, []);
  

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
      <h2>Math Questions</h2>
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
                      name={`question-${index}`}
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

export default MathExam;
