/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const HtmlToPdf = () => {
  const printRef = useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
  };

  return (
    <div>
      <div ref={printRef} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1>Hello, World!</h1>
        <p>This is an example of an HTML page that will be converted to a PDF file.</p>
      </div>
      <button onClick={handleDownloadPdf}>Download as PDF</button>
    </div>
  );
};

export default HtmlToPdf;
