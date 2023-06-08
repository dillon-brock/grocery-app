import React, { Dispatch, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addStep } from "../../../services/steps/steps";
import { StepsAction } from "../../../reducers/steps";

type Props = {
  num: number;
  recipeId: string;
  dispatch: Dispatch<StepsAction>;
}

export default function NewStepInput({ num, recipeId, dispatch }: Props) {

  const [detail, setDetail] = useState<string>('');

  const handleAddStep = async (): Promise<void> => {
    const res = await addStep(recipeId, { num, detail });
    if (res.success) {
      dispatch({ type: 'added', step: res.step })
      setDetail('');
    }
  }

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
          value={detail}
          onChange={(e) => setDetail(e.nativeEvent.text)}
        />
      </View>
      <Pressable onPress={handleAddStep}>
        <Text>Add</Text>
      </Pressable>
    </View>
  )
}