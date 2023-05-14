import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import glyphs from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";

type Props = {
  name: keyof typeof glyphs;
  handlePress: (() => void) | (() => Promise<void>);
  style?: ViewStyle | TextStyle,
  size?: number
}

export default function IconButton({ name, handlePress, style, size }: Props) {

  const pressTest = () => {
    console.log('pressed');
    // await handlePress();
  }
  return (
    <Pressable onPressOut={() => pressTest()} style={{ zIndex: 1 }}>
      <Ionicons
        style={style || {}}
        name={name}
        size={size || 30}
      />
    </Pressable>
  )
}