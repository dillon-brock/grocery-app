import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from './styles';
import { CategoryInList } from "../../types/types";
import { updateCategory } from "../../services/categories/categories";

type Props = { 
  name: string;
  setCategory: Dispatch<SetStateAction<CategoryInList>>;
  categoryId: string;
  locked: boolean;
};

export default function CategoryTitle({ name, categoryId, locked, setCategory }: Props) {

  const [currentName, setCurrentName] = useState<string>(name.toUpperCase());


  const handleUpdateName = async (): Promise<void> => {
    const res = await updateCategory({ id: categoryId, name: currentName});
    if (res.success) {
      setCategory(res.category);
    }
  }

  useEffect(() => {
    const updateName = async () => {
      await handleUpdateName();
    }
    updateName();
  }, [locked])

  return (
    <View style={styles.outerContainer}>
      <View style={styles.textContainer}>
        {locked ?
          <Text style={styles.title}>{name}</Text> :
          <TextInput
            value={currentName}
            onChange={(e) => setCurrentName(e.nativeEvent.text.toUpperCase())}
            onSubmitEditing={handleUpdateName}
            onBlur={handleUpdateName}
            style={styles.title}
          />
        }
      </View>
    </View>
  )
}