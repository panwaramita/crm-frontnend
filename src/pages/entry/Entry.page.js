import React, { useState } from "react";
import "./entry.style.css";
import LoginFrom from "../../components/loign/Login.comp";
import PasswordReset from "../../components/loign/passwordReset/passwordReset.comp.";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name == "email") setEmail(value);
    if (name == "password") setPassword(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fill Up the form");
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("enter the email");
    }
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className='entry-page bg-info'>
      <div>
        <div className='header'>
          {frmLoad == "login" && (
            <LoginFrom
              handleChange={handleChange}
              email={email}
              password={password}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
            />
          )}
          {frmLoad == "reset" && (
            <PasswordReset
              handleChange={handleChange}
              email={email}
              handleOnSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
            />
          )}
        </div>
      </div>
    </div>
  );
};
