import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ViewStyle } from "react-native";
import glyphs from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";

type Props = {
  name: keyof typeof glyphs;
  handlePress: () => void;
  style?: ViewStyle,
  size?: number
}

export default function IconButton({ name, handlePress, style, size }: Props) {
  return (
    <Pressable onPressOut={handlePress}>
      <Ionicons
        style={style || {}}
        name={name}
        size={size || 30}
      />
    </Pressable>
  )
}