import React from "react";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { PrimaryButtonProps } from "../../types/props";
import styles from '../../styles/primaryButton';

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