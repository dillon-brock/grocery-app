import React, { Dispatch, SetStateAction, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RecipeStep } from "../../services/recipes/types";
import { addStep } from "../../services/steps/steps";

type Props = {
  num: number;
  recipeId: string;
  setSteps: Dispatch<SetStateAction<RecipeStep[]>>;
}

export default function NewStepInput({ num, recipeId, setSteps }: Props) {

  const [detail, setDetail] = useState<string>('');

  const handleAddStep = async (): Promise<void> => {
    const res = await addStep(recipeId, { num, detail });
    if (res.success) {
      setSteps(prev => [...prev, res.step]);
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