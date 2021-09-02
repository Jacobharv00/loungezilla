import { NavLink } from "react-router-dom";

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
    <main>
      <h1>LOUNGEZILLA</h1>
      <h1>{user.name}</h1>
      <NavLink to="/">Home</NavLink>
      <button onClick={handleLogoutClick}>Log Out</button>
    </main>
  )
}

export default Navbar;
