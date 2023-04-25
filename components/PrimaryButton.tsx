import React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { PrimaryButtonProps } from "../types/props";

export default function PrimaryButton({ text, handlePress }: PrimaryButtonProps) {

  const [pressed, setPressed] = useState<boolean>();

  const onPressOut = () => {
    setPressed(false);
    if (handlePress) handlePress();
  }

  return (
    <Pressable 
          onPressIn={() => setPressed(true)}
          onPressOut={onPressOut}
          style={{backgroundColor: pressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: pressed ? "black" : "white", ...styles.buttonText}}>
            {text}
          </Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
})