// import React, { useState } from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";
import "./LoginPage.css";

// prettier-ignore
function LoginPage ( { onLogin } ) {
  // const [showLogin, setShowLogin] = useState(true)



  return (
    <div className="login-page">
        <LoginForm onLogin={onLogin} />
        <SignupForm onLogin={onLogin} />
    </div>
  )
}

export default LoginPage;

// {
//   /* {showLogin ? ( <> <LoginForm onLogin={onLogin} /> <button onClick={setShowLogin(!showLogin )}></button> </> )
//         : (
//           <div className='signup-form-div'>
//             <SignupForm onLogin={onLogin} showLogin={showLogin} setShowLogin={setShowLogin} />
//           </div>
//         )} */
// }
