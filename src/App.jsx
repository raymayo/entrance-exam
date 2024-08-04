/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExelEditor from './components/ExelEditor'
import ExamEntry from './components/ExamEntry';
import ExamTable from './components/ExamTable';
import Exam from './components/Exam';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamEntry />} />
        <Route path="/exams" element={<ExamTable />} />
        <Route path='/test' element={<ExelEditor/>}/>
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
