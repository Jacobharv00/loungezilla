// import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";

// prettier-ignore
function LoginPage ( { onLogin } ) {
  // const [showLogin, setShowLogin] = useState(true)



  return (
    <>
      <section className="loungezilla-name">
        LOUNGEZILLA
      </section>
      

      
      <section className="login-form">
        <LoginForm onLogin={onLogin} />
      </section>

      <section className="signup-form">
        <SignupForm onLogin={onLogin} />
      </section>


      {/* {showLogin ? ( <> <LoginForm onLogin={onLogin} /> <button onClick={setShowLogin(!showLogin )}></button> </> )
        : (
          <div className='signup-form-div'>
            <SignupForm onLogin={onLogin} showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
        )} */}
      
      
    </>
  )
}

export default LoginPage;
