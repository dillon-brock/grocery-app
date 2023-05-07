import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

type Props = { name: string};

export default function CategoryTitle({ name }: Props) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name.toUpperCase()}</Text>
      </View>
    </View>
  )
}