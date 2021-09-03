import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

// prettier-ignore
function LoginForm ( { onLogin } ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleLoginResponse(user) {
    onLogin(user);
    history.push("/");
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => handleLoginResponse(user));
    } else {
      resp.json().then((err) => setErrors(err.errors));
    }
  });
}


  
  
  // prettier-ignore
  return (
    <main>
      <form className="login-form" onSubmit={handleSubmit}>
        <section>
          <label className="username-label">Username</label>
          <input
            className="username-input"
            type="text"
            id="login-username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section>
          <label className="password-label">Password</label>
          <input
            className="password-input"
            type="password"
            id="login-password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <button className="login-btn">Login</button>
        </section>
        <section className="login-errors">
          {errors ? ( <div>
            {errors.map((err) => (
              <div key={err}>{err}</div>))}</div>
          ) : null}
        </section>
      </form>
    </main>
  )
}

export default LoginForm;
