import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import styles from './styles';
import { ListWithDetail } from "../../types/types";

type Props = { 
  name: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
};

export default function CategoryTitle({ name, setList }: Props) {

  const [currentName, setCurrentName] = useState<string>(name.toUpperCase());

  return (
    <View style={styles.outerContainer}>
      <View style={styles.textContainer}>
        <TextInput
          value={currentName}
          onChange={(e) => setCurrentName(e.nativeEvent.text.toUpperCase())}
          style={styles.title}
        />
      </View>
    </View>
  )
}