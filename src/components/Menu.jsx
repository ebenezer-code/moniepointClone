import { subMenu as menuData } from "../data/menu";
import { IoIosArrowDown } from "react-icons/io";
import useDropDown from "../hooks/useDropDown";

export const Menu = () => {
  const {
    menuState,
    updateMenuState,
    handleMenuHover,
    handleSubHover,
    handleChildHover,
  } = useDropDown();
  return (
    <div
      className="lg:relative lg:flex lg:items-center lg:gap-6"
      onMouseLeave={() => updateMenuState({ activeMenu: null })}
    >
      {menuData.map((menu, menuIndex) => (
        <div
          key={menuIndex}
          className="lg:relative lg:cursor-pointer"
          onMouseEnter={() => handleMenuHover(menuIndex)}
        >
          <div className="lg:flex lg:items-center lg:gap-2 text-base font-medium">
            {menu.name}
            <IoIosArrowDown />
          </div>

          {menuState.activeMenu === menuIndex && (
            <div
              className={`lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:bg-white lg:shadow-2xl lg:rounded-xl lg:py-5 lg:px-6 lg:z-50 ${
                menu.submenu?.some((s) => s.submenu?.length)
                  ? "lg:flex lg:gap-10 lg:min-w-[750px]"
                  : "lg:grid lg:gap-4 lg:min-w-[300px]"
              }`}
            >
              {/* Submenu */}
              <div className="lg:w-full">
                {menu.submenu.map((sub, subIndex) => {
                  const isActive = subIndex === menuState.activeSubIndex;
                  const isCompany = menu.name === "Company";
                  return (
                    <div
                      key={subIndex}
                      className={`lg:p-3 lg:rounded-lg lg:transition-all text-black ${
                        isActive ? "lg:bg-[#37435D]" : "lg:hover:bg-[#37435D]"
                      }`}
                      onMouseEnter={() => handleSubHover(subIndex)}
                    >
                      {isCompany ? (
                        <div className="lg:flex lg:items-center lg:gap-2">
                          {sub.icon && (
                            <sub.icon
                              className={`text-xl ${
                                isActive ? "text-white" : "text-[#37435D]"
                              }`}
                            />
                          )}
                          <p
                            className={`font-semibold text-base ${
                              isActive ? "text-white" : "text-black"
                            }`}
                          >
                            {sub.name}
                          </p>
                          {sub.about && (
                            <p
                              className={`text-sm ${
                                isActive ? "text-gray-300" : "text-gray-600"
                              } mt-1`}
                            >
                              {sub.about}
                            </p>
                          )}
                        </div>
                      ) : (
                        <>
                          <p
                            className={`font-semibold text-base ${
                              isActive ? "text-white" : "text-black"
                            }`}
                          >
                            {sub.name}
                          </p>
                          {sub.about && (
                            <p
                              className={`text-sm ${
                                isActive ? "text-gray-300" : "text-gray-600"
                              } mt-1`}
                            >
                              {sub.about}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sub-submenu (children) */}
              {menu.submenu[menuState.activeSubIndex]?.submenu?.length > 0 && (
                <div className="lg:w-full">
                  {menu.submenu[menuState.activeSubIndex].submenu.map(
                    (child, childIndex) => {
                      const isChildActive =
                        menuState.activeSubSubMap[menuState.activeSubIndex] ===
                        childIndex;

                      const Icon = child.icon;
                      const isComingSoon = child.comingSoon;

                      return (
                        <div
                          key={childIndex}
                          className={`group lg:flex lg:items-start lg:gap-4 lg:py-3 lg:px-2 lg:rounded-lg transition-all cursor-pointer`}
                          onMouseEnter={() =>
                            handleChildHover(
                              menuState.activeSubIndex,
                              childIndex,
                              isComingSoon
                            )
                          }
                        >
                          {/* Icon container */}
                          <div
                            className={`p-3 rounded-lg transition-all ${
                              isComingSoon
                                ? "bg-[#37435D]"
                                : isChildActive
                                ? "bg-[#3158EE]"
                                : "group-hover:bg-[#3158EE] bg-[#37435D]"
                            }`}
                          >
                            {child.icon && (
                              <Icon
                                className={`text-xl transition-colors ${
                                  child.comingSoon
                                    ? "text-black"
                                    : isChildActive
                                    ? "text-white"
                                    : "group-hover:text-white text-black"
                                }`}
                              />
                            )}
                          </div>

                          {/* Text */}
                          <div className="space-y-1">
                            <p
                              className={`font-semibold text-base flex items-center gap-2 transition-colors ${
                                isComingSoon
                                  ? "text-black"
                                  : isChildActive
                                  ? "text-[#3259EC]"
                                  : "group-hover:text-[#3259EC] text-black"
                              }`}
                            >
                              {child.name}
                              {isComingSoon && (
                                <span className="text-xs bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full">
                                  Coming Soon
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-gray-700">
                              {child.about}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
