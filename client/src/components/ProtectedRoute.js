import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {

    const [user, setUser] = useState();

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

  if (localStorage.getItem("token")) {
    return children; 
  } else {
    return <Navigate to="/login" />;
  }
}