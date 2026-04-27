import React from "react";
import { NavLink } from "react-router";

const Navber = () => {
    const Links=<>
    <NavLink to="/">Home</NavLink>
    <NavLink className="ml-4" to="/About">About</NavLink>
    <NavLink className="ml-4" to="/Login">Login</NavLink>
    <NavLink className="ml-4" to="/Registation">registation</NavLink>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/src/assets/react.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden ml-4 lg:flex">
        <ul className="menu menu-horizontal px-1">
         {Links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Firebase</a>
      </div>
    </div>
  );
};

export default Navber;
