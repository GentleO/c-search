import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
      {[
        { to: "/search", label: "All" },
        { to: "/news", label: "News" },
        { to: "/images", label: "Images" },
        { to: "/videos", label: "Videos" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
            ${isActive
              ? "bg-violet-600 text-white dark:bg-violet-400 dark:text-violet-950"
              : "text-gray-600 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-800"
            }`
          }>
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;