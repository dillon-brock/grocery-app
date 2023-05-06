import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import { deleteItem, updateItem } from "../../services/list-items/list-items";
import { type ListItem, ListWithDetail } from "../../types/types";

type Props = {
  id: string;
  item: string;
  quantity: number | null;
  bought: boolean;
  categoryId: string | null;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function GroceryListItem({ id, item, quantity, bought, categoryId, setList }: Props) {

  const handleDeleteItem = async (): Promise<void> => {
    await deleteItem(id);
    setList((prev: ListWithDetail) => {
      const category = prev.categories.find(category => category.id == categoryId);
      const updatedCategory = {
        ...category,
        items: category?.items.filter(item => item.id != id)
      };
      return {
      ...prev,
      categories: { 
        ...prev.categories.filter(category => category.id != categoryId),
        updatedCategory 
      }
    }});
  }

  const handleToggleBought = async (): Promise<void> => {
    await updateItem(id, { bought: !bought });
    setList((prev: ListWithDetail): ListWithDetail => {
      const category = prev.categories.find(category => category.id == categoryId);
      const itemToBeUpdated = category?.items.find((i: ListItem) => i.id == id);
      if (!itemToBeUpdated || !category) return prev;
      const updatedCategory = { 
        ...category, 
        items: [
          ...category.items.filter(i => i.id != id), 
          { ...itemToBeUpdated, bought: !bought }
        ]}
      return {
      ...prev,
      categories: [
        ...prev.categories.filter(c => c.id != categoryId),
        updatedCategory
      ]
    }})
  }

  return (
    <Pressable onLongPress={handleDeleteItem} onPress={handleToggleBought}>
      <Text>{`${quantity}   ${item}: ${bought}`}</Text>
    </Pressable>
  )
}