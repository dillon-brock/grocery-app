import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import { deleteItem, updateItem } from "../../services/list-items/list-items";
import { type ListItem, ListWithItems } from "../../types/types";

type Props = {
  id: string;
  item: string;
  quantity: number | null;
  bought: boolean;
  setList: Dispatch<SetStateAction<ListWithItems>>;
}

export default function GroceryListItem({ id, item, quantity, bought, setList }: Props) {

  const handleDeleteItem = async (): Promise<void> => {
    await deleteItem(id);
    setList((prev: ListWithItems) => ({
      ...prev,
      items: prev.items.filter((listItem: ListItem) => listItem.id != id)
    }));
  }

  const handleToggleBought = async (): Promise<void> => {
    await updateItem(id, { bought: !bought });
    setList((prev: ListWithItems): ListWithItems => {
      const itemToBeUpdated = prev.items.find((i: ListItem) => i.id == id);
      if (!itemToBeUpdated) return prev;
      return {
      ...prev,
      items: [
        ...prev.items.filter((i: ListItem) => i.id != id),
        { ...itemToBeUpdated, bought: !bought }
      ]
    }})
  }

  return (
    <Pressable onLongPress={handleDeleteItem} onPress={handleToggleBought}>
      <Text>{`${quantity}   ${item}: ${bought}`}</Text>
    </Pressable>
  )
}