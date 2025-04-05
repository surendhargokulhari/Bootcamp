import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const cuisines = ["Italian", "American", "Indian", "Thai"];
  return (
    <div className="flex gap-4 justify-center p-4 bg-gray-100 d-flex justify-content-center align-items-center">
      {cuisines.map((cuisine) => (
        <NavLink
          key={cuisine}
          to={`/search/${cuisine}`}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full ${
              isActive ? "bg-green-500 text-white" : "bg-white text-gray-800"
            } shadow`
          }
        >
          {cuisine}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
