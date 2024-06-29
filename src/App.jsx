import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamTable from './components/ExamTable';
import ExamEntry from './components/ExamEntry';
import Exam from './components/Exam';

function App() {
  return (
    <Router>
      <Routes>
					<Route path="/" element={<ExamEntry />} />
					<Route path="/exams" element={<ExamTable />} />
        <Route path="/math" element={<Exam examName="Math" />} />
        <Route path="/english" element={<Exam examName="English" />} />
        <Route path="/filipino" element={<Exam examName="Filipino" />} />
        <Route path="/science" element={<Exam examName="Science" />} />
      </Routes>
    </Router>
  );
}

export default App;
