import React from "react";
import { logout } from "../../utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
    logout();
  };

  return (
    <div>
      <header>
        <nav className="bg-slate-300 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Ratting
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                onClick={handleClick}
                className="text-gray-800 bg-white dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
