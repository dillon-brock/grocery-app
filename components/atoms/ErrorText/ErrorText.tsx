import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

type Props = {
  text: string;
  size?: number;
}

export default function ErrorText({ text, size }: Props) {

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: size || 16 }]}>{text}</Text>
    </View>
  )
}