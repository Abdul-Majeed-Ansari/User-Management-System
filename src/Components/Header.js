import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container">
          <span className="navbar-brand">
            {" "}
            <FaHouseUser /> User Management System{" "}
          </span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/profile"
              >
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
