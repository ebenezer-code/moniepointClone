import { useState } from "react";
import { subMenu as menuData } from "../data/menu";
import { IoIosArrowDown } from "react-icons/io";

export const Menu = () => {
  const [menuState, setMenuState] = useState({
    isOpen: null,
    activeSubIndex: null,
    hoverSubIndex: null,
  });
  const updateMenuState = (updates) => {
    setMenuState((prev) => ({ ...prev, ...updates }));
  };
  const getActiveSub = () =>
    menuState.hoverSubIndex ?? menuState.activeSubIndex;

  return (
    <div className="relative flex items-center justify-center gap-2 space-x-4">
      {menuData.map((item, i) => (
        <button
          key={i}
          className="flex items-center justify-center gap-1 cursor-pointer transition-all ease-in-out duration-200 "
          onMouseEnter={() => {
            const hasNestedSubmenu = item.submenu?.some(
              (s) => s.submenu?.length
            );

            updateMenuState({
              activeMenu: i,
              activeSubIndex: hasNestedSubmenu ? 0 : null,
              hoverSubIndex: null,
            });
          }}
        >
          {item.name}
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      ))}
    </div>
  );
};
