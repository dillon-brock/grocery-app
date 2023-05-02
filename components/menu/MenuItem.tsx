import React from "react";
import { Pressable, Text } from "react-native";
import styles from '../../styles/menuItem';

type Props = {
  text: string;
  handlePress: () => void;
}

export default function MenuItem({ text, handlePress }: Props) {

  return (
    <Pressable onPressOut={handlePress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}