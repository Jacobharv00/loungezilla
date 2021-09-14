import { NavLink } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import Avatar from "react-avatar"


function Navbar ( { user, setUser } ) {
  const [ showLogoutBtn, setShowLogoutBtn ] = useState( false )
  const [ active, setActive ] = useState( false )

  function handleLogoutClick () {
    fetch( "/logout", {
      method: "DELETE",
    } ).then( ( resp ) => {
      if ( resp.ok ) {
        setUser( null )
      }
    } )
  }

  return (
    <nav className="nav-bar">
      <h1 className="app-name">LOUNGEZILLA</h1>
      <img className='dino-guy' src='kawaii-dinosaur.png' alt='dino' />
      <ul className="nav-links">
        <li className="nav-li">
          <NavLink className="nav-link-home" to='/'>Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link-collections" to="/CollectionsPage">Collections</NavLink>
        </li>
        <li className="nav-li">
          <div className="dropdown">
            <div className="drop-btn">
              <Avatar
                onClick={ () => setShowLogoutBtn( !showLogoutBtn ) }
                round="5px"
                size={ 70 }
                className="avatar-photo-nav"
                name={ user.name }
                color="#e65f5c"
                fgColor="#f5f7dc"
              />
            </div>

            <div className="dropdown-content">
              <button className="logout-btn" onClick={ handleLogoutClick }>
                Log Out
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
