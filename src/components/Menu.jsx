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
      className="lg:relative lg:flex lg:items-center lg:justify-center lg:gap-2 lg:space-x-4"
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
          className="lg:flex lg:items-center lg:justify-center lg:gap-1 lg:cursor-pointer lg:transition-all lg:ease-in-out lg:duration-200"
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
              className={`lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:bg-red-600 lg:text-[#030B1D] lg:text-[18px] lg:shadow-lg lg:rounded-md lg:p-6 lg:z-50 lg:transition-all lg:duration-300 founders-font
                ${
                  item.submenu?.some((s) => s.submenu?.length)
                    ? "lg:flex lg:items-start lg:justify-start lg:gap-8 lg:min-w-[700px] lg:text-left"
                    : "lg:grid lg:gap-2 lg:min-w-[250px] lg:text-left"
                }`}
            >
              <div className="lg:w-full">
                {item.submenu?.map((sub, j) => {
                  const isActive = getActiveSub() === j;
                  const isCompany = item.name === "Company";

                  return (
                    <div
                      key={j}
                      className={`lg:cursor-pointer lg:p-2 lg:rounded-md lg:transition-all lg:duration-200 ${
                        isActive
                          ? isCompany
                            ? "lg:font-bold"
                            : "lg:bg-[#37435D] lg:text-[#030B1D] lg:font-semibold"
                          : isCompany
                          ? "lg:hover:text-blue-200"
                          : "lg:hover:bg-[#37435D]"
                      }`}
                      onMouseEnter={() => updateMenuState({ hoverSubIndex: j })}
                      onClick={() => updateMenuState({ activeSubIndex: j })}
                    >
                      <p>{sub.name}</p>

                      {sub.about && (
                        <p className="lg:text-[#37435D] lg:text-sm lg:w-[350px]">
                          {sub.about}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              {item.submenu?.some((s) => s.submenu?.length) && (
                <div className="lg:w-full lg:transition-opacity lg:duration-300">
                  {item.submenu?.[getActiveSub()]?.submenu?.map((item, k) => (
                    <div
                      key={k}
                      className="lg:p-2 lg:text-left lg:whitespace-nowrap"
                    >
                      {item.name}
                      {item.comingSoon && (
                        <span className="lg:ml-2 lg:text-yellow-300 lg:text-xs">
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
