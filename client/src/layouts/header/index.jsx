import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <h1>
          <Link to={"/"}>OneSchool</Link>
        </h1>
        <div>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/add-school"}>AddSchool</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/"}>Courses</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/"}>Programs</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/"}>Teachers</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
