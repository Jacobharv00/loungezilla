import React, { useState } from "react"
import "./SignupForm.css"


function SignupForm ( { onLogin } ) {
  const [ name, setName ] = useState( "" )
  const [ username, setUsername ] = useState( "" )
  const [ userPhoto, setUserPhoto ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ passwordConfirmation, setPasswordConfirmation ] = useState( "" )
  const [ errors, setErrors ] = useState( [] )



  function handleSubmit ( e ) {
    e.preventDefault()
    setErrors( [] )
    fetch( "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {
        name,
        username,
        user_photo: userPhoto,
        password,
        password_confirmation: passwordConfirmation,
      } ),
    } ).then( ( resp ) => {
      if ( resp.ok ) {
        resp.json().then( ( user ) => onLogin( user ) )
      } else {
        resp.json().then( ( err ) => setErrors( err.errors ) )
      }
    } )
  }

  // prettier-ignore
  return (
    <main>
      <form className="signup-form" onSubmit={ handleSubmit }>

        <section>
          <label className="name-label">Name</label>
          <input
            className="name-input"
            type="text"
            id="name"
            autoComplete="off"
            value={ name }
            onChange={ ( e ) => setName( e.target.value ) }
          />
        </section>

        <section>
          <label className="username-label">Username</label>
          <input
            className="username-input"
            type="text"
            id="signup-username"
            autoComplete="off"
            value={ username }
            onChange={ ( e ) => setUsername( e.target.value ) }
          />
        </section>

        <section>
          <label className="avatar-label">Avatar(User Photo)</label>
          <input
            className="avatar-input"
            type="text"
            id="signup-avatar"
            autoComplete="off"
            value={ userPhoto }
            onChange={ ( e ) => setUserPhoto( e.target.value ) }
          />
        </section>

        <section>
          <label className="password-label">Password</label>
          <input
            className="password-input"
            type="password"
            id="signup-password"
            autoComplete="off"
            value={ password }
            onChange={ ( e ) => setPassword( e.target.value ) }
          />
        </section>

        <section>
          <label className="password-confirmation-label">Password Confirmation</label>
          <input
            className="password-confirmation-input"
            type="password"
            id="signup-password-confirmation"
            autoComplete="off"
            value={ passwordConfirmation }
            onChange={ ( e ) => setPasswordConfirmation( e.target.value ) }
          />
        </section>

        <section>
          <button className="signup-btn" type="submit">Sign Up</button>
        </section>

        <section className="signup-errors">
          { errors.map( err => ( <div key={ err }> { err } </div> ) ) }
        </section>

      </form>
    </main>
  )
}

export default SignupForm
