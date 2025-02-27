import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">Thar-olution</div>
      
      {/* Hamburger Menu Icon */}
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
