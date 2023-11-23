import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
          <NavLink to="/about" className={({ isActive }) => isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }>
            {" "}
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            Contact
          </NavLink>
          <NavLink
            to="/book"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            Book
          </NavLink>
          <NavLink
            to="/allproduct"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            All Product
          </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
