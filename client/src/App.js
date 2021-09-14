import "./App.css"
import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Navbar from "./Components/NavBar/Navbar"
import HomePage from "./Pages/HomePage"
import CollectionsPage from "./Pages/CollectionsPage"


function App () {
  const [ user, setUser ] = useState( null )


  useEffect( () => {
    fetch( "/me" ).then( ( resp ) => {
      if ( resp.ok ) {
        resp.json().then( ( user ) => setUser( user ) )
      }
    } )

  }, [] )

  if ( !user ) return <LoginPage onLogin={ setUser } />


  return (
    <>
      <Navbar user={ user } setUser={ setUser } />
      <br></br>
      <div className="app">
        <Switch>
          <Route exact path="/" >
            <HomePage user={ user } />
          </Route>
          <Route exact path="/CollectionsPage" >
            <CollectionsPage user={ user } />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
