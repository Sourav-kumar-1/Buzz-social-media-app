import React, { useState, useRef } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Auth from '../Auth/Auth'

function Signup() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef()

  const navigate = useNavigate()
  
  const [error, setError]= useState("")
 

  const handleSignup = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:5000/api/auth/signup", user);
        navigate("/signin", { replace: true })
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div>
      
      <div className="signup">
        <h1>Signup</h1>
        <input type="text" name="firstname" 
          required
          ref={firstName}
         placeholder="First Name" />

        <input type="text" name="lastname"
          required
          ref={lastName}
         placeholder="last Name" />

        <input type="text" name="email" 
          required
          ref={email}
         placeholder="Your Email" />

        <input type="password" name="password"
          required
          ref={password}
          placeholder="Your Password" />

        <input type="password" name="password" 
          required
          ref={passwordAgain}
          placeholder="confirm Password" />
        <div className="button" onClick={handleSignup} >Sign up</div>
        {error && <div className='error'>some Error Occured</div>}
         
        <div>or</div>
        <div className="button" onClick={() => navigate("/signin", { replace: true })}>sign in</div>
      </div>
     
    </div>
  )
}

export default Signup
