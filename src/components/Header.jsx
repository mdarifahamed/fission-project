import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow bg-white">
      {/* Logo (col-3) */}
      <div className="basis-3/12">
        <h2 className="text-xl font-bold">Leo9</h2>
      </div>

      {/* Menu (col-7) */}
      <nav className="basis-7/12">
        <ul className="flex justify-center gap-8 font-medium">
          {["Work", "Services", "Clients", "About", "Knowledge"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-pink-500 ${
                    isActive ? "text-pink-600 font-bold" : "text-black"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button (col-2) */}
      <div className="basis-2/12 flex justify-end">
        <button className="px-4 py-2 bg-black text-xl font-serif text-white rounded-lg">
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;


