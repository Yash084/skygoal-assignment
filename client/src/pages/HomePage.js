import React, { useState, useEffect } from "react";
import '../styles/homepage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const HomePage = () => {

  const [user, setUser] = useState();
  const Navigate = useNavigate();
 //get user
 const getUser = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/user/getUserData",
      { token: localStorage.getItem("token") },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (res.data.success) {
      setUser(res.data.data);
    } else {
      localStorage.clear();
      <Navigate to="/login" />;
    }
  } catch (error) {
    localStorage.clear();
    console.log(error);
  }
};

useEffect(() => {
  if (!user) {
    getUser();
  }
}, [user, getUser]);


const handleLogOut = ( ) =>{
    localStorage.clear();
    window.location.reload();
}
  return (
    <div className="">
      <h1>Welcome to home page { user? user.name : ''}.</h1>
      <h2>User Name: {user? user.name : ''}</h2>
      <h2>User Email: {user? user.email : ''}</h2>
     <ol>
      <h3>I have created a login and a register page using React JS</h3>
     <h3>
     I have implemented user authentication using jwt token means that is a user is logged in then a token in genrated which prevents user login again and again until the user log out or delete the token.
     </h3>
     </ol>
     <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default HomePage;
