import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import IconButton from "../IconButton/IconButton";
import { addItemToList } from "../../services/list-items/list-items";
import { ListWithDetail } from "../../types/types";
import styles from './styles';


type Props = {
  listId: string;
  categoryId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>
}

export default function NewItemInput({ listId, setList, categoryId }: Props) {

  const [item, setItem] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleAddItem = async (): Promise<void> => {
    const addItemRes = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity || null,
      categoryId
    });

    if (addItemRes.success) {
      setList((prev: ListWithDetail) => {
        const category = prev.categories.find(c => c.id == categoryId);
        if (!category) return prev;
        const updatedCategory = { 
          ...category, 
          items: [ 
            ...category.items, 
            addItemRes.listItem 
          ]
        }

        return { 
          ...prev,
          categories: [
            ...prev.categories.filter(c => c.id != categoryId),
            updatedCategory
          ]
        }
      });
      setItem('');
      setQuantity('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={quantity} 
          onChange={(e) => setQuantity(e.nativeEvent.text)}
          style={styles.input} />
      </View>
      <View style={styles.itemContainer}>
      <TextInput 
          placeholder='item' 
          value={item} 
          onChange={(e) => setItem(e.nativeEvent.text)}
          style={styles.input} />
      </View>
      <View>
        <IconButton name="add-circle" handlePress={handleAddItem} size={32} style={{ color: '#E16A64' }} />
      </View>
    </View>
  )
}