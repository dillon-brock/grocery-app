import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import { deleteItem, updateItem } from "../../services/list-items/list-items";
import { type ListWithDetail } from "../../types/types";
import { updateItemInState } from "../../utils";
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";

type Props = {
  id: string;
  item: string;
  quantity: string | null;
  bought: boolean;
  categoryId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function GroceryListItem({ id, item, quantity, bought, categoryId, setList }: Props) {

  const handleDeleteItem = async (): Promise<void> => {
    await deleteItem(id);
    setList((prev: ListWithDetail) => {
      const category = prev.categories.find(category => category.id == categoryId);
      if (!category) return prev;
      const updatedCategory = {
        ...category,
        items: category?.items.filter(item => item.id != id)
      };
      if (!updatedCategory) return prev;
      return {
      ...prev,
      categories: [
        ...prev.categories.filter(category => category.id != categoryId),
        updatedCategory 
      ]
    }});
  }

  const handleToggleBought = async (): Promise<void> => {
    await updateItem(id, { bought: !bought });
    setList((prev: ListWithDetail): ListWithDetail => {

      const newListState = updateItemInState({ 
        prev, 
        categoryId, 
        itemId: id, 
        prop: 'bought', 
        val: !bought
      });

      return newListState;
    })
  }

  return (
    <Pressable onLongPress={handleDeleteItem} onPress={handleToggleBought} style={styles.container}>
      <View style={styles.checkmarkContainer}>
        {bought &&
          <Ionicons name="checkmark-circle-outline" size={18} />
        }
      </View>
      <Text style={styles.text}>{`${quantity} ${item}`}</Text>
    </Pressable>
  )
}