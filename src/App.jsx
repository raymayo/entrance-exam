import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ExamTable from './components/ExamTable';
import ExamEntry from './components/ExamEntry';
import MathExam from './components/ExamTab/MathExam';
import EnglishExam from './components/ExamTab/EnglishExam';
import FilipinoExam from './components/ExamTab/FilipinoExam';
import ScienceExam from './components/ExamTab/ScienceExam';


function App() {
  return (
    <>

   <Routes>
      <Route path='/' element={  <ExamEntry/>}/>
      <Route path='/exams' element={<ExamTable/>}/>
      <Route path='/math' element={<MathExam/>}/>
      <Route path='/english' element={<EnglishExam/>}/>
      <Route path='/filipino' element={<FilipinoExam/>}/>
      <Route path='/science' element={<ScienceExam/>}/>
    </Routes>
    </>
  )
}

export default App
