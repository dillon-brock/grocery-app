import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = {
  num: number
}

export default function NewStepInput({ num }: Props) {

  return (
    <View>
      <View>
        <Text>{`${num}.`}</Text>
      </View>
      <View>
        <TextInput
          multiline
          numberOfLines={2}
          placeholder='New step'
        />
      </View>
    </View>
  )
}