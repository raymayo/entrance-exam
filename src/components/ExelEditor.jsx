/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ExcelEditor = () => {
	const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState('');

  // Fetch the file and read it
  const fetchFile = async (url) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const binaryStr = new Uint8Array(arrayBuffer).reduce(
        (acc, byte) => acc + String.fromCharCode(byte),
        ''
      );
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      setData(workbook);
      setFileName('fetched_file.xlsx');
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  };

  // Fetch the file when the component mounts
  useEffect(() => {
    const fileUrl = '/document.xlsx'; // Replace with the actual URL
    fetchFile(fileUrl);
  }, []);

  // Handle editing the file with formData from localStorage
  const handleEdit = () => {
    if (data) {
      // Display confirmation box
      const isConfirmed = window.confirm('Are you sure you want to submit your data and scores?');

      if (!isConfirmed) {
        return;
      }

      const sheetName = data.SheetNames[0];
      const worksheet = data.Sheets[sheetName];

      // Retrieve formData from localStorage
      const formData = JSON.parse(localStorage.getItem('userData'));

      if (formData) {
        // Map formData to specific cells
        
        const cellMapping = {
          // 'A2': formData.regNo || '',
          'B8': formData.fullName || '',
          'J8': formData.genderSelect || '',
          'B9': formData.address || '',
          'C10': formData.birthday || '',
          'G10': formData.birthplace || '',
          'C11': formData.contactNo || '',
          'G11': formData.guardianName || '',
          'D12': formData.lastSchool || '',
          'D13': formData.lastSchoolAddress || '',
          'E14': formData.transfereeCourse || '',
          'E15': formData.course1st || '',
          'E17': formData.course2nd || '',
          'I32': formData.Date || '',
          'C34': formData.fullName || '',
          'A35': formData.Date || '',
          'A43': formData.english || 0,
          'A44': formData.math || 0,
          'A45': formData.filipino || 0,
          'D43': formData.science || 0,
          'F46': (formData.math || 0) + (formData.english || 0) + (formData.filipino || 0) + (formData.science || 0)
        };
        

        // Update cells in the worksheet
        for (const [cell, value] of Object.entries(cellMapping)) {
          worksheet[cell] = { v: value, t: typeof value === 'number' ? 'n' : 's' };
        }

        // Create a new workbook with the updated worksheet
        const newWorkbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(newWorkbook, worksheet, sheetName);

        // Write the updated workbook to a binary string
        const updatedExcel = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'binary' });

        // Create a Blob from the binary string
        const blob = new Blob([s2ab(updatedExcel)], { type: 'application/octet-stream' });

        // Create a download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${formData.fullName}_Entrance_Exam.xlsx`;
        a.click();
        URL.revokeObjectURL(url);

          // localStorage.clear();
          // console.log('All items cleared');
          // navigate('/');
      } else {
        console.error('No formData found in localStorage');
      }
    }
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  return (
    <>
      <button onClick={handleEdit} disabled={!data} className='finalSubmit'>Submit Data & Scores</button>
    </>
  );
};

export default ExcelEditor;
