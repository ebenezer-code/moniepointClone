import { useState } from "react";
import { subMenu as menuData } from "../data/menu";
import { IoIosArrowDown } from "react-icons/io";

export const Menu = () => {
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
    <div
      className="relative flex items-center justify-center gap-2 space-x-4"
      onMouseEnter={() => {}}
      onMouseLeave={() => {
        updateMenuState({
          activeMenu: null,
          hoverSubIndex: null,
        });
      }}
    >
      {menuData.map((item, i) => (
        <button
          key={i}
          className="flex items-center justify-center gap-1 cursor-pointer transition-all ease-in-out duration-200"
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
          {menuState.activeMenu === i && (
            <div
              className={`
    absolute top-full left-1/2 -translate-x-1/2 bg-red-600 text-[#030B1D]  text-[18px] shadow-lg rounded-md p-6 z-50
    transition-all duration-300 founders-font
  ${
    item.submenu?.some((s) => s.submenu?.length)
      ? "flex items-start justify-start gap-8 min-w-[700px] text-left"
      : "grid gap-2 min-w-[250px] text-left"
  }
  `}
            >
              <div className="w-full">
                {item.submenu?.map((sub, j) => {
                  const isActive = getActiveSub() === j;
                  const isCompany = item.name === "Company";

                  return (
                    <div
                      key={j}
                      className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${
                        isActive
                          ? isCompany
                            ? "font-bold"
                            : "bg-[#37435D] text-[#030B1D] font-semibold"
                          : isCompany
                          ? "hover:text-blue-200"
                          : "hover:bg-[#37435D]"
                      }`}
                      onMouseEnter={() => updateMenuState({ hoverSubIndex: j })}
                      onClick={() => updateMenuState({ activeSubIndex: j })}
                    >
                      <p>{sub.name}</p>

                      {sub.about && (
                        <p className="text-[#37435D] text-sm w-[350px]">
                          {sub.about}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              {item.submenu?.some((s) => s.submenu?.length) && (
                <div className="w-full transition-opacity duration-300">
                  {item.submenu?.[getActiveSub()]?.submenu?.map((item, k) => (
                    <div key={k} className="p-2 text-left whitespace-nowrap">
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
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      ))}
    </div>
  );
};
