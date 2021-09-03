import { NavLink } from "react-router-dom";
import "./Navbar.css";
// prettier-ignore
function Navbar ( {user, setUser} ) {
  
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }

 // prettier-ignore
  return (
    <nav className="nav-bar">
      <h1 className="app-name">LOUNGEZILLA</h1>

      <div className="nav-link-home-container">
        <NavLink className="nav-link-home" to="/">Home</NavLink>
        <button className="logout-btn" onClick={handleLogoutClick}>Log Out</button>
      </div>
      {/* <NavLink className="navLink-collections" to="/collections">Collections</NavLink> */}

      
    </nav>
  )
}

export default Navbar;
