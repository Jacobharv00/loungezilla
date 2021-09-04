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

      
      <main className="movie-container">
        
      <div className="movie-background">
        <img className="movie-img" src="https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg" alt="point break" />
        <p className="movie-title">Point Break</p>
      </div>

      <div className="movie-background">
        <img className="movie-img" src="https://m.media-amazon.com/images/I/51SMQYQN04L.jpg" alt="lords of d town" />
        <p className="movie-title">Lords Of Dog Town</p>
      </div>

          
      <div className="movie-background">
        <img className="movie-img" src="https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" alt="the goonies" />
        <p className="movie-title">The Goonies</p>
      </div>

          
      <div className="movie-background">
        <img className="movie-img" src="http://deadshirt.net/wp-content/uploads/2016/11/7030382987dacb0fe8c7f1513a3ec177-683x1024.jpg" alt="rush hour" />
        <p className="movie-title">Rush Hour</p>
      </div>

          
      <div className="movie-background">
        <img className="movie-img" src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b090ab15486e72e9adc4328c29a4085d926bf04b713197c7ce8432c7fff72a8._RI_V_TTW_.jpg" alt="big daddy" />
        <p className="movie-title">Big Daddy</p>
      </div>

          
      <div className="movie-background">
        <img className="movie-img" src="https://flxt.tmsimg.com/assets/p18934_p_v10_aa.jpg" alt="beverly hills ninja" />
        <p className="movie-title">Beverly Hills Ninja</p>
      </div>

          
      <div className="movie-background">
        <img className="movie-img" src="https://posterspy.com/wp-content/uploads/2020/04/HappyGilmore_lr2.jpg" alt="happy gilmore" />
        <p className="movie-title">Happy Gilmore</p>
      </div>
          
      <div className="movie-background">
        <img className="movie-img" src="https://images.sr.roku.com/idType/roku/context/global/id/f5db77ea2ea454ad9cab1168d513529b/images/gracenote/assets/p16468_v_v8_an.jpg/magic/396x0/filters:quality(70)" alt="billy madison" />
        <p className="movie-title">Billy Madison</p>
        </div>
        
      </main>

    </div>
  )
}

export default LoginPage;
