/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Print from './components/Print'
import ExamEntry from './components/ExamEntry';
import ExamTable from './components/ExamTable';
import Exam from './components/Exam';
import ProtectedRoute from './components/ProtectedRoute';
import SubmitExam from './components/SubmitExam.jsx';
import ResultReader from './components/ResultReader.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamEntry />} />
        <Route path="/exams" element={<ExamTable />} />
        <Route path='/print' element={<Print/>}/>
        <Route path='/submit' element={<SubmitExam/>}/>
        <Route path='/scan' element={<ResultReader/>}/>
        <Route
          path="/exams/:examName"
          element={
            <ProtectedRoute>
              <Exam />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
