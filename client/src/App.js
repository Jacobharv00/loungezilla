import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/NavBar/Navbar";
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
      <>  
      <Navbar setUser={setUser} user={user} />
      <br></br>
        <div className="app">
          <Switch>
            <Route path="/" exact>
            <HomePage user={user}/>
            </Route>
            {/* <Route path="/CollectionsPage" exact>
              <CollectionsPage/>
            </Route> */}
          </Switch>
        </div>
      </>
  );
}

export default App;
