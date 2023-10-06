
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/register.css';


const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onRegister = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', { name, email, password });
      if (res.data.success) {
        Navigate('/login');
      } else {
        setError(res.data.message);
      }
    }catch(error){
      console.log(error);
      setError('Something went wrong');
    }
  };


  
  return (
    <div className="form-container">
      <form onSubmit={onRegister} className="register-form">
        <h3 className="text-center">Register Form</h3>

        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <p className="error-message">{error}</p>

        <Link to="/login" className="m-2">
          Already registered? Go to Login
        </Link>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

