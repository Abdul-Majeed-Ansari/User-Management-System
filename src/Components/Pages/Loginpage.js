import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  // Handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return (
    <>
      <div className="form__container d-flex flex-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Managenemt System</h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputpassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputpassword1"
            />
          </div>
          <div className="form__signuplink mb-3">
            <p>
              Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
          </div>
          <button type="submit" className="form-button" onClick={handleSubmit}>
            Login
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Loginpage;
