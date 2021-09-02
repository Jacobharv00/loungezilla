import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

// prettier-ignore
function App() {
  const [user, setUser] = useState(null);

  useEffect( () => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
  });

  }, [] );
  
  if (!user) return <LoginPage onLogin={setUser} />


  return (
    <div className="app">
      <Navbar setUser={setUser} user={user} />
    <main>
        <Switch>
          <Route path="/" exact>
            <HomePage user={user} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
