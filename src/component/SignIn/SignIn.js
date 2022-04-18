import React, { useState } from 'react'
import './SignIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Auth from '../Auth/Auth';
function SignIn() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleclick = async (e) => {
    e.preventDefault();
    console.log(email, password)
    try {
      const { login } = {
        headers: {
          "Content-type": "application/json"
        }
      }
      setLoading(true)
      const { data } = await axios.post
        ("http://localhost:5000/api/auth/login",
          { email, password }, login)
      console.log(data)
      localStorage.setItem('userinfo', JSON.stringify(data))
      setLoading(false)
    } catch (error) {
      setError(error.response.data.message)
    }
  }
 
  return (
    <div  className=' main-dive'>
        <Auth/>
      <div className='signin'>
        <h1>Sign in</h1>
        <input type="email" name="email" value={email} placeholder="Username" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" name="password" value={password} placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}></input>
       {/*  <span><input type='checkbox'/>Remember</span> */}
        <div className="button" onClick={handleclick}>Sign in</div>
        <div>or</div>
      <div className="button" onClick={() => navigate("/signup", { replace: true })}>Sign up</div>
      </div>
    </div>
  )
}

export default SignIn