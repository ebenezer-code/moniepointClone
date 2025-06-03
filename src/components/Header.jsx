import { useState } from "react";
import Layout from "./Layout";
import logo from "../assets/headerIcons/logo.png";
import Menu from "./Menu";

const navItems = ["Business", "Personal"];
const moreNavItems = ["About", "Contact", "Blog"];

function Header() {
  const [state, setState] = useState({ isActive: "Business" });

  return (
    <Layout className="relative">
      <div className="bg-[#061435] fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            <img src={logo} className="max-h-[30px]" />

            <ul className="flex text-white font-[Inter] text-[13px] gap-6 items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setState({ ...state, isActive: item })}
                  className={`${
                    state.isActive === item
                      ? "bg-[#37435D]"
                      : "hover:bg-[#37435D]"
                  } min-w-[80px] min-h-[36px] transition-all duration-300 rounded-2xl cursor-pointer text-center flex items-center justify-center`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Menu />
            <ul className="flex items-center text-white font-[Inter] text-[13px] gap-4">
              {moreNavItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setState({ ...state, isActive: item })}
                  className={`${
                    state.isActive === item
                      ? "bg-[#37435D]"
                      : "hover:bg-[#37435D]"
                  } min-w-[80px] min-h-[36px] transition-all duration-300 rounded-2xl cursor-pointer text-center flex items-center justify-center`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Header;
