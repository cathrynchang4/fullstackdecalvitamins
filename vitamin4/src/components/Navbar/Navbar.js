//import React
import React from 'react';
// Import Link to navigate between pages
import { Link } from 'react-router-dom'
// Import the CSS file for styling
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          My Website
        </Link>
      </div>
      
      <ul className="nav-links">
        <li>
          <Link to="/Home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/NotHome" className="nav-link">
            Not Home
          </Link>
        </li>
      </ul>
    </nav>
    );
     // add Home and NotHome, including links (after routing established)
  };
  
  // Always export your components so they can be imported in other files

  export default Navbar;
  