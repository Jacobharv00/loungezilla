// import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";

// prettier-ignore
function LoginPage ( { onLogin } ) {
  // const [showLogin, setShowLogin] = useState(true)



  return (
    <main>
      <LoginForm onLogin={onLogin} />
      
      <SignupForm onLogin={onLogin} />
      


      {/* {showLogin ? ( <> <LoginForm onLogin={onLogin} /> <button onClick={setShowLogin(!showLogin )}></button> </> )
        : (
          <div className='signup-form-div'>
            <SignupForm onLogin={onLogin} showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
        )} */}
      
      
    </main>
  )
}

export default LoginPage;
