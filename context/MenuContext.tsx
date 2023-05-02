import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type MenuContextType = {
  menuOpen: boolean,
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType>({} as MenuContextType);

const MenuProvider = ({ children }: PropsWithChildren) => {
  
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>{children}</MenuContext.Provider>
};

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context == undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export { MenuProvider, MenuContext, useMenuContext };