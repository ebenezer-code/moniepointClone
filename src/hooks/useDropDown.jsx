import { useState } from "react";

const useDropDown = () => {
  const [menuState, setMenuState] = useState({
    activeMenu: null,
    activeSubIndex: 0,
    activeSubSubMap: {},
  });

  const updateMenuState = (updates) => {
    setMenuState((prev) => ({ ...prev, ...updates }));
  };

  const handleMenuHover = (menuIndex) => {
    updateMenuState({
      activeMenu: menuIndex,
      activeSubIndex: 0,
    });
  };

  const handleSubHover = (subIndex) => {
    updateMenuState({
      activeSubIndex: subIndex,
    });
  };

  const handleChildHover = (subIndex, childIndex, comingSoon) => {
    if (comingSoon) return;
    setMenuState((prev) => ({
      ...prev,
      activeSubSubMap: {
        ...prev.activeSubSubMap,
        [subIndex]: childIndex,
      },
    }));
  };

  return {
    menuState,
    updateMenuState,
    handleMenuHover,
    handleSubHover,
    handleChildHover,
  };
};

export default useDropDown;
