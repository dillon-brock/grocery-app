import React from "react";
import { useMenuContext } from "../../../../context/MenuContext";
import IconButton from "../IconButton/IconButton";

export default function MenuIcon() {

  const { setMenuOpen } = useMenuContext();

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <IconButton 
      name="ios-menu-outline" 
      handlePress={handleToggleMenu}
      size={32} />
  )
}