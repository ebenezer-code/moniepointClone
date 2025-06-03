import { useState } from "react";
import { subMenu as menuData } from "../data/menu";
import { MdKeyboardArrowDown } from "react-icons/md";

function Menu() {
  const [menuState, setMenuState] = useState({
    activeMenu: null,
    activeSubIndex: null,
    hoverSubIndex: null,
  });

  const updateMenuState = (updates) => {
    setMenuState((prev) => ({ ...prev, ...updates }));
  };

  const getActiveSub = () =>
    menuState.hoverSubIndex ?? menuState.activeSubIndex;

  return (
    <div className="relative">
      <ul
        className="flex gap-4 text-white text-[13px] relative"
        onMouseEnter={() => {}}
        onMouseLeave={() => {
          updateMenuState({
            activeMenu: null,
            hoverSubIndex: null,
          });
        }}
      >
        {menuData.map((menu, i) => (
          <li
            key={i}
            onMouseEnter={() => {
              updateMenuState({ activeMenu: i, hoverSubIndex: null });
            }}
            className="cursor-pointer relative transition-all ease-in-out duration-200 flex items-center justify-center"
          >
            {menu.name}
            {menuState.activeMenu === i && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-red-600 text-white shadow-lg rounded-md p-4 z-50 flex gap-8 transition-all duration-300 min-w-[400px]">
                <div className="w-1/2">
                  {menu.submenu?.map((sub, j) => {
                    const isActive = getActiveSub() === j;
                    return (
                      <div
                        key={j}
                        className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${
                          isActive
                            ? "bg-white text-red-600 font-semibold"
                            : "hover:bg-red-500"
                        }`}
                        onMouseEnter={() =>
                          updateMenuState({ hoverSubIndex: j })
                        }
                        onClick={() =>
                          updateMenuState({ activeSubIndex: j })
                        }
                      >
                        <p>{sub.name}</p>
                        {sub.about && (
                          <p className="text-xs text-gray-200">{sub.about}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="w-1/2 transition-opacity duration-300">
                  {menu.submenu?.[getActiveSub()]?.submenu?.map((item, k) => (
                    <div key={k} className="p-2">
                      {item.name}
                      {item.comingSoon && (
                        <span className="ml-2 text-yellow-300 text-xs">
                          (Coming Soon)
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <MdKeyboardArrowDown className="text-[13px] mx-1" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
