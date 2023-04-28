import React from 'react';
import { Text, View } from "react-native";
import { listScreenStyle as styles } from '../styles/screens';

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your List</Text>
    </View>
  )
}