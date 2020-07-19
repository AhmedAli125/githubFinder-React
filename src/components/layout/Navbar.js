import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className='navbar bg-dark text-light fixed-top'>
        <h1 className="navbar-brand">
          <i className={icon} /> {title}
        </h1>
          <ul className="navbar-nav align-rt mr-2 myStyle">
            <li className="nav-item">
              <Link to ='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
