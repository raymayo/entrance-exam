import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamEntry = () => {
  const [formData, setFormData] = useState({
    regNo: '',
    surName: '',
    firstName: '',
    middleName: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here (e.g., sending data to an API)
    navigate('/exams');
  };

  return (
    <> 
    <form onSubmit={handleSubmit}>
      <div>
        <label>Reg. No.</label>
        <input
          type="number"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          type="text"
          name="surName"
          value={formData.surName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    </>
  );
};

export default ExamEntry;
