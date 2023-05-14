import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

type Props = {
  name: string;
  amount: string | null;
}

export default function IngredientDisplay({ name, amount }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount || ''}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  )
}