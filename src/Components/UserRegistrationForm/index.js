import React, { useState } from 'react';
import './index.css'

const UserRegistrationForm = ({ onStartGame }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    difficulty: '',
  });

  const [showWarning, setShowWarning] = useState(false); // Warning for Start Game
  const [inputBlurErrors, setInputBlurErrors] = useState({}); // Errors for input onBlur

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setInputBlurErrors({ ...inputBlurErrors, [name]: '' }); // Clear onBlur error when input changes
  };

  const validateForm = () => {
    const newErrors = {};

    if (!user.name) {
      newErrors.name = 'Name is required.';
    }

    if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = 'Valid email is required.';
    }

    if (!user.mobile || !/^\d{10}$/.test(user.mobile)) {
      newErrors.mobile = 'Valid 10-digit mobile number is required.';
    }

    if (!user.difficulty) {
      newErrors.difficulty = 'Difficulty level is required.';
    }

    if (Object.keys(newErrors).length === 0) {
      onStartGame(user.difficulty);
    } else {
      setShowWarning(true); // Show warning if there are validation errors
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setInputBlurErrors({ ...inputBlurErrors, [name]: '*This field is required.' });
    } else {
      setInputBlurErrors({ ...inputBlurErrors, [name]: '' });
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      
      <div className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder='Name'
          />
          {inputBlurErrors.name && <span className="error">{inputBlurErrors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Email"
          />
          {inputBlurErrors.email && <span className="error">{inputBlurErrors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Mobile Number"
          />
          {inputBlurErrors.mobile && <span className="error">{inputBlurErrors.mobile}</span>}
        </div>
        <div className="form-group">
          <select
            name="difficulty"
            value={user.difficulty}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {inputBlurErrors.difficulty && <span className="error">{inputBlurErrors.difficulty}</span>}
        </div>
        {showWarning && (
        <div className="warning">
          *Please fill in all the details.
        </div>
      )}
      </div>
      <button onClick={validateForm}>Register</button>
    </div>
  );
};

export default UserRegistrationForm;
