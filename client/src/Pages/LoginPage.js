// import React, { useState } from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";
import "./LoginPage.css";
import { useState } from "react";

// prettier-ignore
function LoginPage ( { onLogin } ) {
  const [ showSignup, setShowSignup ] = useState( false )
  const [ showLogin, setShowLogin ] = useState(false)

  

  return (
    <div className="login-page">
      
      <header className='header'>
        LOUNGEZILLA 
        {/* <h5>browse movies . my collections</h5> */}
        <button className="signup-button" onClick={() => setShowSignup( !showSignup )}>Signup</button>
        <button className="login-button" onClick={() => setShowLogin( !showLogin )}>Login</button>
      </header>
      
      {showSignup ? <SignupForm onLogin={onLogin} /> : showLogin ? <LoginForm onLogin={onLogin} /> : null}
      
      <h1>STATIC MOVIES Background Card</h1>
      <p>Movie Image</p>
      <p>Movie Title</p>

    
    </div>
  )
}

export default LoginPage;
