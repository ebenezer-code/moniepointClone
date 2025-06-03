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
              const hasNestedSubmenu = menu.submenu?.some(
                (s) => s.submenu?.length
              );

              updateMenuState({
                activeMenu: i,
                activeSubIndex: hasNestedSubmenu ? 0 : null,
                hoverSubIndex: null,
              });
            }}
            className="cursor-pointer relative transition-all ease-in-out duration-200 flex items-center justify-center"
          >
            {menu.name}
            {menuState.activeMenu === i && (
              <div
                className={`
      absolute top-full left-1/2 -translate-x-1/2 bg-red-600 text-white shadow-lg rounded-md p-4 z-50
      transition-all duration-300
      ${
        menu.submenu?.some((s) => s.submenu?.length)
          ? "flex gap-8 min-w-[400px]"
          : "grid gap-2 min-w-[200px]"
      } // One-column layout
    `}
              >
                <div className="w-full">
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
                        onClick={() => updateMenuState({ activeSubIndex: j })}
                      >
                        <p>{sub.name}</p>
                        {sub.about && (
                          <p className="text-xs text-gray-200">{sub.about}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {menu.submenu?.some((s) => s.submenu?.length) && (
                  <div className="w-full transition-opacity duration-300">
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
                )}
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
