import React, { Dispatch, SetStateAction, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RecipeWithDetail } from "../../services/recipes/types";
import { addStep } from "../../services/steps/steps";

type Props = {
  num: number;
  recipeId: string;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
}

export default function NewStepInput({ num, recipeId, setRecipe }: Props) {

  const [detail, setDetail] = useState<string>('');

  const handleAddStep = async (): Promise<void> => {
    const res = await addStep(recipeId, { num, detail });
    if (res.success) {
      setRecipe(prev => ({
        ...prev,
        steps: [
          ...prev.steps,
          res.step
        ]
      }))
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
          onChange={(e) => setDetail(e.nativeEvent.text)}
        />
      </View>
      <Pressable onPress={handleAddStep}>
        <Text>Add</Text>
      </Pressable>
    </View>
  )
}