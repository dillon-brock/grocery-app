import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

type Props = {
  color: string;
  text: string;
}

export default function ScreenTitle({ color, text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{text}</Text>
    </View>
  )
}