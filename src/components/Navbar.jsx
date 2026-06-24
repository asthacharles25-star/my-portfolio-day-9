import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        padding: "20px",
      }}
    >
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/projects">
        Projects
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;