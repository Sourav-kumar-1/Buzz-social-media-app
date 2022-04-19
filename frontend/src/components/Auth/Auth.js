import React, { useState } from 'react'
import './Auth.css'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
function Auth() {


  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  )
  const googleSuccess = async (googleData) => {
    const res = await fetch('/api/googlelogin', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    setLoginData(data)
    localStorage.setItem('loginData', JSON.stringify(data));
    navigate("/feed", { replace: true })
  }
  const googleFailure = (res) => {
    alert(res);
  }
  const handleLogout = () => {
    localStorage.removeItem('loginData')
    setLoginData(null);
  }


  return (

    <div className="google-sign">
      <img className='logo' src='/assets/TO_THE_NEW_Logo.png' alt='logo'></img>
      <p>Enter your details and start journey with us</p>
      <small>
        Don't stop until you're proud
      </small>
      <br />
      {
        loginData ? (
          <div>
            <h3>you logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <button onClick={renderProps.onClick} className='button'>SignIn with Google</button>
            )}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={'single_host_origin'}
          />
        )
      }
      {/*  <GoogleLogin
        clientId='138343912471-87rl55gbb12l7jg14ur6fnlr25kp17vq.apps.googleusercontent.com'
        render={renderProps => (
          <button onClick={renderProps.onClick} className='button'>SignIn with Google</button>
        )}
        buttonText="Login"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
    </div>

  )
}

export default Auth
