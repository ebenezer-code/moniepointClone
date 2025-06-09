import { useState } from "react";
import logo from "../assets/headerIcons/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    isActive: "Business",
  });
  return (
    <header className="w-full bg-[#061435] text-white sticky top-0 z-50 font-[Inter] text-[12px]">
      <nav className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-between h-auto md:h-20 p-0 lg:p-6 space-y-4 md:space-y-0">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-6 md:w-1/2 w-full">
          <div className="flex w-full justify-between p-4 items-center md:w-auto md:p-0">
            <img
              src={logo}
              alt="Logo"
              className="h-7 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            />
            <div className="relative w-6 h-6 md:hidden">
              <IoMenu
                onClick={() => setState({ ...state, isMenuOpen: true })}
                className={`absolute top-0 left-0 text-2xl transition-opacity duration-200 ${
                  state.isMenuOpen
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              />
              <IoCloseSharp
                onClick={() => setState({ ...state, isMenuOpen: false })}
                className={`absolute top-0 left-0 text-2xl transition-opacity duration-200 ${
                  state.isMenuOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              />
            </div>
          </div>
          <ul className="flex w-full h-14 md:h-8 md:flex md:space-x-6 md:w-auto md:border-none border-[#808080] border-b-[0.2px] cursor-pointer">
            <li
              onClick={() => setState({ ...state, isActive: "Business" })}
              className={`${
                state.isActive === "Business"
                  ? "bg-[#0E2256] md:bg-[#37435D]"
                  : "bg-transparent"
              } md:rounded-full md:p-4 w-1/2 flex items-center justify-center md:w-auto md:py-0 md:border-none border-[#808080] border-r-[0.2px] transition-background duration-300 ease-in-out`}
            >
              Business
            </li>
            <li
              onClick={() => setState({ ...state, isActive: "Personal" })}
              className={`${
                state.isActive === "Personal"
                  ? "bg-[#0E2256] md:bg-[#37435D]"
                  : "bg-transparent"
              }  md:rounded-full md:p-4 w-1/2 flex items-center justify-center md:w-auto md:py-0 md:border-none transition-background duration-300 ease-in-out`}
            >
              Personal
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 md:w-1/2 w-full">
          <div className="hidden md:flex space-x-6">
            <button>Products</button>
            <button>Company</button>
          </div>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-4">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button>Sign in →</button>
            <div className="flex items-center space-x-1">
              <p>country logo</p>
              <span>icon</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
