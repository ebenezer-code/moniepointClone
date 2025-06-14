import { useState, useEffect } from "react";
import logo from "../assets/headerIcons/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Menu } from "./Menu";
import nig from "../assets/svg/nig.svg";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLink = ["Business", "Personal"];
const Links = ["About", "Contact", "Blog"];

const Header = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    isActive: navLink[0],
  });

  useEffect(() => {
    const handleWindowBlur = () =>
      setState((prev) => ({ ...prev, isMenuOpen: false }));
    const handleSize = () => {
      if (window.innerWidth >= 1024)
        setState((prev) => ({ ...prev, isMenuOpen: false }));
    };

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <header
      className={`w-full bg-[#061435] text-white sticky top-0 z-50 font-[Inter] text-[15px]`}
    >
      <nav className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between h-auto lg:h-20 p-0 lg:p-6 space-y-4 lg:space-y-0 lg:space-x-40">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-6 lg:w-1/2 w-full">
          <div className="flex w-full justify-between p-4 items-center lg:w-auto lg:p-0">
            <img
              src={logo}
              alt="Logo"
              className="h-7 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            />
            <div className="w-6 h-6 lg:hidden relative">
              <IoMenu
                onClick={() => setState({ ...state, isMenuOpen: true })}
                className={`text-2xl absolute transition-opacity duration-200 ease-in-out cursor-pointer ${
                  state.isMenuOpen
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              />
              <IoCloseSharp
                onClick={() => setState({ ...state, isMenuOpen: false })}
                className={`text-2xl absolute transition-opacity duration-200 ease-in-out cursor-pointer ${
                  state.isMenuOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              />
            </div>
          </div>

          <ul
            className={`${
              state.isMenuOpen ? "h-0 invisible" : "h-14 visible"
            }w-full flex lg:h-8 lg:flex lg:space-x-6 lg:w-auto cursor-pointer transition-all duration-300 ease-in-out`}
          >
            {navLink.map((item, i) => (
              <li
                key={i}
                onClick={() => setState({ ...state, isActive: item })}
                className={`overflow-hidden lg:overflow-auto ${
                  state.isMenuOpen ? "invisible lg:visible" : "visible"
                } ${
                  state.isActive === item
                    ? "bg-[#0E2256] lg:bg-[#37435D]"
                    : "bg-transparent"
                } lg:rounded-full hover:bg-[#37435D] lg:p-4 w-1/2 flex items-center justify-center lg:w-auto lg:py-0 lg:border-none border-[#808080] ${
                  state.isActive === navLink[0]
                    ? "border-b-[0.2px]"
                    : "border-none"
                } transition-background duration-300 ease-in-out`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 lg:w-1/2 w-full">
          <div className="hidden lg:flex lg:space-x-6">
            <Menu />
          </div>
          <div className="hidden lg:flex lg:space-x-6">
            <ul className="lg:flex lg:space-x-4">
              {Links.map((link, i) => (
                <li
                  key={i}
                  onClick={() => setState({ ...state, isActive: link })}
                  className={`${
                    state.isActive === link
                      ? "lg:bg-[#37435D]"
                      : "lg:bg-transparent"
                  } lg:rounded-full lg:hover:bg-[#37435D] lg:flex lg:items-center lg:justify-center lg:border-[#808080] lg:cursor-pointer lg:p-2 lg:w-1/2`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6">
            <button className="lg:w-[100px] lg:whitespace-nowrap lg:bg-[#C4E9FD] lg:text-[#000000] lg:p-[10px] lg:pr-[5px]  lg:rounded-full lg:flex lg:items-center lg:justify-center lg:cursor-pointer">
              Sign in
              <span className="lg:px-1">
                <IoMdArrowRoundForward />
              </span>
            </button>
            <div className="lg:flex lg:items-center lg:justify-center lg:space-x-2 lg:cursor-pointer">
              <img src={nig} />
              <span className="lg:text-[20px]">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {state.isMenuOpen && (
          <motion.div
            className={`transition-all duration-300 ease-in-out min-h-screen bg-[#061435] w-full lg:hidden`}
          >
            <MobileMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
