import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Avatar from "react-avatar";

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
      <ul className="nav-links">
        <li className="nav-li">
          <NavLink className="nav-link-home" to="/">Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link-collections" to="/CollectionsPage">Collections</NavLink>
        </li>
        <li className="nav-li">
          <button className="logout-btn" onClick={handleLogoutClick}>Log Out</button>
        </li>
        <li className="nav-li">
          <Avatar
            round={5}
            size={70}
            className="avatar-photo-nav"
            name={user.name}
            color="#e65f5c"
            fgColor="#f5f7dc"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
