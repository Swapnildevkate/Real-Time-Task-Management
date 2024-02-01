import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbarr from './Navbarr';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user + "user signed in successfully");
        window.alert("You are Successfully Logged In");
        // Redirect to the homepage
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage + errorCode + "Invalid Username or password");
        window.alert("Invalid Credentials");
      });
  };

  return (
    <>
      <Navbarr />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <h2 className="text-center mb-4">LOGIN</h2>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                  name="email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  name="password"
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleSignup}>
                  Login
                </button>
              </div>
            </form>
            <Link to='/signup'>
              <span className='float-end mt-4'>
                Create New Account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
