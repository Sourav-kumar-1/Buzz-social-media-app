import React from 'react'
import './Auth.css'
function Auth() {

/*   const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  } */
  return (
    
    <div className="google-sign">
      <img className='logo' src='/assets/TO_THE_NEW_Logo.png' alt='logo'></img>
        <p>Enter your details and start journey with us</p>
     <small>
          Don't stop until you're proud
       </small>
      <div className="button" /* onClick={register} */ >SignIn with Google</div>
      
    </div>
    
  )
}

export default Auth