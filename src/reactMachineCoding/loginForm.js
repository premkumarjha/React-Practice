import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [error, setError] = useState({ userNameError: "", passwordError: "" });
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    let formerror = {};
    if (formData.userName.length <= 0) {
      formerror.userNameError = "please enter user name";
    }
    if (formData.password.length <= 0) {
      formerror.passwordError = "please enter password";
    }
    setError({ ...formerror });
    if(formData.userName && formData.password){
 navigate("/home");
    }
   
  };

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={formData?.userName}
          onChange={(e) => {
            setFormData({ ...formData, userName: e.target.value }); //keep in mind
            if (e.target.value.length <= 0) {
              setError({ ...error, userNameError: "please enter user name" });
            } else {
              setError({ ...error, userNameError: "" });
            }
          }}
        />
        {error.userNameError && (
          <p style={{ color: "red", marginBottom: 10 }}>
            {error.userNameError}
          </p>
        )}
        <input
          value={formData?.password}
          onChange={
            (e) => {
              setFormData({ ...formData, password: e.target.value });
              if (e.target.value.length <= 0) {
                setError({ ...error, passwordError: "please enter password" });
              } else {
                setError({ ...error, passwordError: "" });
              }
            }
            //changehandler(e, "password")
          }
        />
        {error.passwordError && (
          <p style={{ color: "red", marginBottom: 10 }}>
            {error.passwordError}
          </p>
        )}
        <button type="submit">Login </button>
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </form>
    </>
  );
};

export default LoginForm;
