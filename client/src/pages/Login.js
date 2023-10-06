

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css';

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", { email, password });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        Navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onLogin} className="register-form">
        <h3 className="text-center">Login Form</h3>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="error-message">{error}</p>

        <Link to="/register" className="m-2">
          Not a user? Go to Register
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
