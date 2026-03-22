import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body px-5">
      <div className="container-fluid">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          My-PortFolio
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`${open ? "d-block" : "d-none"} d-lg-flex navbar-collapse`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Journey</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;