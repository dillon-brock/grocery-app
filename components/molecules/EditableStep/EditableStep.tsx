import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text, TextInput, View } from "react-native";
import { updateStepDetail } from '../../../services/steps/steps';
import { RecipeStep } from '../../../services/recipes/types';
import styles from './styles';

type Props = {
  id: string;
  num: number;
  detail: string;
  setSteps: Dispatch<SetStateAction<RecipeStep[]>>;
}

export default function EditableStep({ id, num, detail, setSteps }: Props) {

  const [currentDetail, setCurrentDetail] = useState<string>(detail);

  const handleUpdateDetail = async () => {
    const res = await updateStepDetail(id, currentDetail);
    if (res.success) {
      setSteps(prev => [
        ...prev.filter(step => step.id != id),
        res.step
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.subsection, styles.numContainer]}>
        <Text style={styles.num}>{`${num}.`}</Text>
      </View>
      <View style={[styles.subsection, styles.inputContainer]}>
        <TextInput
          style={styles.inputText}
          multiline
          value={currentDetail}
          onChange={(e) => setCurrentDetail(e.nativeEvent.text)}
          onBlur={handleUpdateDetail}
        />
      </View>
    </View>
  )
}