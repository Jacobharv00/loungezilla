import { NavLink } from "react-router-dom";
import "./Navbar.css";
// prettier-ignore
function Navbar ( {setUser} ) {
  
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
      <NavLink className="nav-link-home" to="/">Home</NavLink>
      <NavLink className="nav-link-collections" to="/CollectionsPage">Collections</NavLink>
      <button className="logout-btn" onClick={handleLogoutClick}>Log Out</button>
    </nav>
  )
}

export default Navbar;
