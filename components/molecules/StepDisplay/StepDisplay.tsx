import React from "react";
import { Text, View } from "react-native";
import styles from './styles';

type Props = {
  num: number;
  detail: string;
}

export default function StepDisplay({ num, detail }: Props) {

  return (
    <View style={styles.container}>
      <View style={[styles.subsection, styles.numContainer]}>
        <Text style={styles.num}>{`${num}.`}</Text>
      </View>
      <View style={[styles.subsection, styles.detailContainer]}>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  )
}