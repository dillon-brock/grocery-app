import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  text: string;
  handlePress: () => void;
}

export default function MenuItem({ text, handlePress }: Props) {

  return (
    <Pressable onPressOut={handlePress}>
      <Text>{text}</Text>
    </Pressable>
  )
}