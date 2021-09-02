import React, { useState } from "react";

// prettier-ignore
function SignupForm ({onLogin, showLogin, setShowLogin}) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleExitSignUpForm() {
    setShowLogin(!showLogin);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        user_photo: userPhoto,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // prettier-ignore
  return (
    <main>
      <button onClick={handleExitSignUpForm}>X</button>
      <form onSubmit={handleSubmit}>
        
        <section>
          <label>Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        <section>
          <label>Username</label>
          <input
            type="text"
            id="signup-username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>

        <section>
          <label>Avatar(User Photo)</label>
          <input
            type="text"
            id="signup-avatar"
            autoComplete="off"
            value={userPhoto}
            onChange={(e) => setUserPhoto(e.target.value)}
          />
        </section>

        <section>
          <label>Password</label>
          <input
            type="password"
            id="signup-password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <section>
          <label>Password Confirmation</label>
          <input
            type="password"
            id="signup-password-confirmation"
            autoComplete="off"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </section>

        <section>
          <button type="submit">Sign Up</button>
        </section>

        <section>
          {errors.map( err => ( <div key={err}> {err} </div> ))}
        </section>
      
      </form>
    </main>
  )
}

export default SignupForm;
