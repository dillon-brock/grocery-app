import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import styles from './styles';
import { ListWithDetail } from "../../types/types";
import { updateCategory } from "../../services/categories/categories";

type Props = { 
  name: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
  categoryId: string;
};

export default function CategoryTitle({ name, setList, categoryId }: Props) {

  const [currentName, setCurrentName] = useState<string>(name.toUpperCase());

  const handleUpdateName = async (): Promise<void> => {
    const updateNameRes = await updateCategory({ id: categoryId, name: currentName});
    if (updateNameRes.success) {
      setList(prev => {
        const category = prev.categories.find(c => c.id == categoryId);
        if (!category) return prev;
        return {
          ...prev,
          categories: [
            ...prev.categories.filter(c => c.id != categoryId),
            {
              ...category,
              name: currentName
            }
          ]
        }
      })
    }
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.textContainer}>
        <TextInput
          value={currentName}
          onChange={(e) => setCurrentName(e.nativeEvent.text.toUpperCase())}
          onSubmitEditing={handleUpdateName}
          onBlur={handleUpdateName}
          style={styles.title}
        />
      </View>
    </View>
  )
}