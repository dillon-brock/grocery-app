import React, { Dispatch,useState } from 'react';
import { Text, TextInput, View } from "react-native";
import { updateStepDetail } from '../../../services/steps/steps';
import styles from './styles';
import { StepsAction } from '../../../reducers/steps';

type Props = {
  id: string;
  num: number;
  detail: string;
  dispatch: Dispatch<StepsAction>;
}

export default function EditableStep({ id, num, detail, dispatch }: Props) {

  const [currentDetail, setCurrentDetail] = useState<string>(detail);

  const handleUpdateDetail = async () => {
    const res = await updateStepDetail(id, currentDetail);
    if (res.success) {
      dispatch({
        type: 'updated',
        stepId: id,
        step: res.step
      });
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