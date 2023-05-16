import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from './styles';
import { CategoryInList } from "../../types/types";
import { updateCategory } from "../../services/categories/categories";

type Props = { 
  name: string;
  setCategories: Dispatch<SetStateAction<CategoryInList[]>>;
  categoryId: string;
  locked: boolean;
};

export default function CategoryTitle({ name, categoryId, locked, setCategories }: Props) {

  const [currentName, setCurrentName] = useState<string>(name.toUpperCase());


  const handleUpdateName = async (): Promise<void> => {
    const res = await updateCategory({ id: categoryId, name: currentName});
    if (res.success) {
      setCategories(prev => ([
        ...prev.filter(c => c.id != categoryId),
        res.category 
      ]))
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
          <Text>{name}</Text> :
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