import React, { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";


const SubmitExam = () => {
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState("");

  console.log(JSON.parse(localStorage.getItem('userData')));


  useEffect(() => {
    // Load data from localStorage
    const data = JSON.parse(localStorage.getItem("userData")) || {};
    setUserData(data);
  }, []);


  const handleSubmit = async () => {
    try {
      if (Object.keys(userData).length === 0) {
        setMessage("No user data found in localStorage.");
        return;
      }

      // POST request to your Express backend
      const response = await axios.post("http://localhost:5000/api/examiners", userData);

      setMessage("Data successfully submitted to MongoDB!");
      console.log("Response from server:", response.data);
    //   localStorage.clear();
      console.log('All items cleared');
      navigate('/');
    } catch (error) {
      setMessage("Failed to submit data. Please try again.");
      console.error("Error:", error.response?.data || error.message);
    }
  };

  console.log()

  return (
    <div className="text-black">
   {userData.regNo ? (
        <QRCode value={userData.regNo} />
      ) : (
        <p>loading...</p>
      )}
    
      <h1>Submit User Data</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre> {/* Display the user data */}
      <button onClick={handleSubmit}>Submit Result</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubmitExam;