import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>My Portfolio</h1>
    <div>
      <Link
        to="/"
        style={{
          color: "inherit",
          marginRight: "1.5rem",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "inherit",
          marginRight: "1.5rem",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        About
      </Link>
      <Link
        to="/projects"
        style={{
          color: "inherit",
          marginRight: "1.5rem",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
