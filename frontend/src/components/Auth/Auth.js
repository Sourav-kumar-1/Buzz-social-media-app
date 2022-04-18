import React from 'react';
import './Auth.css'
import {GoogleLogin} from 'react-google-login'
function Auth() {


  return (
    
    <div className="google-sign">
      <img className='logo' src='/assets/TO_THE_NEW_Logo.png' alt='logo'></img>
        <p>Enter your details and start journey with us</p>
     <small>
          Don't stop until you're proud
       </small>
      <br/>

      <GoogleLogin
        clientId='138343912471-87rl55gbb12l7jg14ur6fnlr25kp17vq.apps.googleusercontent.com'
        render={renderProps => (
          <button onClick={renderProps.onClick} className='button'>SignIn with Google</button>
          )}
          buttonText="Login"
          /* onSuccess={googleSuccess}
          onFailure={googleFailure} */
          cookiePolicy={'single_host_origin'}
          />
          
      
    </div>
    
  )
}

export default Auth