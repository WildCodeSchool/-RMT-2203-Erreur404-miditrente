/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className={`navbar_mt ${showlinks ? "show_nav_mt" : "hidden_nav_mt"}`}>
      <div className="navbar_logo_mt" />
      <Link to="/" className="nav_logo_mt">
        Logo
      </Link>
      <ul className="navbar_links_mt">
        <li className="navbar_item_mt">
          <Link
            to="/"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Info"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            A propos
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Co2"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Concentration Co2
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Fonte"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Fonte des glaces
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Contact"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger_mt"
        onClick={() => setShowLinks(!showlinks)}
      >
        <span className="burger_bar_mt" />
      </button>
    </nav>
  );
}

export default Nav;
