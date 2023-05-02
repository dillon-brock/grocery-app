import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import { useMenuContext } from "../context/MenuContext";

export default function MenuIcon() {

  const { setMenuOpen } = useMenuContext();

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <Pressable onPressOut={handleToggleMenu}>
      <Ionicons 
        name="ios-menu-outline"
        size={30} />
    </Pressable>
  )
}