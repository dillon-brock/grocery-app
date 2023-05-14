import React from "react";
import { Text, View } from "react-native";

type Props = {
  num: number;
  detail: string;
}

export default function StepDisplay({ num, detail }: Props) {

  return (
    <View>
      <View>
        <Text>{`${num}.`}</Text>
      </View>
      <View>
        <Text>{detail}</Text>
      </View>
    </View>
  )
}