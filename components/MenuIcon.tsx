import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

export default function MenuIcon() {

  const handleToggleMenu = () => {
    console.log('menu toggled');
  }

  return (
    <Pressable onPressOut={handleToggleMenu}>
      <Ionicons 
        name="ios-menu-outline"
        size={30} />
    </Pressable>
  )
}