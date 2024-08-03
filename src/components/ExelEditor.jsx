import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelEditor = () => {
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState('');

  // Function to fetch the file and read it
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
  React.useEffect(() => {
    const fileUrl = '/test.xlsx'; // Replace with the actual URL
    fetchFile(fileUrl);
  }, []);

  const handleEdit = () => {
    if (data) {
      const sheetName = data.SheetNames[0];
      const worksheet = data.Sheets[sheetName];

      // Edit a cell (e.g., change the value of cell A1)
      worksheet['A2'].v = 'New Value';

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
      a.download = `updated_${fileName}`;
      a.click();
      URL.revokeObjectURL(url);
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
    <div>
      <button onClick={handleEdit} disabled={!data}>Edit and Download</button>
    </div>
  );
};

export default ExcelEditor;
