import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text, TextInput, View } from "react-native";
import { updateStepDetail } from '../../services/steps/steps';
import { RecipeWithDetail } from '../../services/recipes/types';

type Props = {
  id: string;
  num: number;
  detail: string;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
}

export default function EditableStep({ id, num, detail, setRecipe }: Props) {

  const [currentDetail, setCurrentDetail] = useState<string>(detail);

  const handleUpdateDetail = async () => {
    const res = await updateStepDetail(id, currentDetail);
    if (res.success) {
      setRecipe(prev => ({
        ...prev,
        steps: [
          ...prev.steps.filter(step => step.id != id),
          res.step
        ]
      }));
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
          value={currentDetail}
          onChange={(e) => setCurrentDetail(e.nativeEvent.text)}
          onBlur={handleUpdateDetail}
        />
      </View>
    </View>
  )
}