import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-gesture-handler";
import { updateItem } from "../../services/list-items/list-items";
import { ListItem, ListWithDetail } from "../../types/types";

type Props = {
  id: string;
  quantity: string | null;
  item: string;
  categoryId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function EditableListItem({ id, quantity, item, categoryId, setList }: Props) {

  const [currentQuantity, setCurrentQuantity] = useState<string>(quantity || '');
  const [currentItem, setCurrentItem] = useState<string>(item);

  const handleUpdateQuantity = async () => {
    const updateRes = await updateItem(id, { quantity: currentQuantity });
    if (updateRes.success) {
      setList(prev => {
        const category = prev.categories.find(c => c.id == categoryId);
        const itemToBeUpdated = category?.items.find(item => item.id == id);
        if (!itemToBeUpdated || !category) return prev;
        const updatedItem: ListItem = { ...itemToBeUpdated, quantity: currentQuantity };
        const updatedCategory = {
          ...category,
          items: [
            ...category.items.filter(item => item.id != id),
            updatedItem
          ]
        }
        return {
          ...prev,
          categories: [
            ...prev.categories.filter(c => c.id != categoryId),
            updatedCategory
          ]
        };
      })
    }
  }

  const handleUpdateItem = async () => {
    const updateRes = await updateItem(id, { item: currentItem });
    if (updateRes.success) {
      setList(prev => {
        const category = prev.categories.find(c => c.id == categoryId);
        const itemToBeUpdated = category?.items.find(item => item.id == id);
        if (!itemToBeUpdated || !category) return prev;
        const updatedItem: ListItem = { ...itemToBeUpdated, item: currentItem };
        const updatedCategory = {
          ...category,
          items: [
            ...category.items.filter(item => item.id != id),
            updatedItem
          ]
        }
        return {
          ...prev,
          categories: [
            ...prev.categories.filter(c => c.id != categoryId),
            updatedCategory
          ]
        };
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.qtyContainer}>
        <TextInput 
          placeholder='amt' 
          value={currentQuantity} 
          onChange={(e) => setCurrentQuantity(e.nativeEvent.text)}
          onBlur={handleUpdateQuantity}
          style={styles.input} />
      </View>
      <View style={styles.itemContainer}>
      <TextInput 
          value={currentItem} 
          onChange={(e) => setCurrentItem(e.nativeEvent.text)}
          onBlur={handleUpdateItem}
          style={styles.input} />
      </View>
    </View>
  )
}