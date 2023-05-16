import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import { CategoryInList, ListItem, ListWithDetail } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";
import NewItemInput from "../NewItemInput/NewItemInput";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import EditableListItem from "../EditableListItem/EditableListItem";
import { addItemToList, deleteItem, updateItem } from "../../services/list-items/list-items";
import { updateItemInState } from "../../utils";

type Props = {
  category: CategoryInList;
  setCategory: Dispatch<SetStateAction<CategoryInList>>;
  listId: string;
  locked: boolean;
}

export default function ListCategorySection({ category, setCategory, listId, locked }: Props) {

  const [items, setItems] = useState<ListItem[]>(category.items);

  const handleAddItem = async (item: string, quantity: string): Promise<void> => {
    const res = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity || null,
      categoryId: category.id
    });

    if (res.success) {
      setItems(prev => [...prev, res.listItem]);
    }
  }

  const handleUpdateQuantity = async (itemId: string, quantity: string) => {
    const res = await updateItem(itemId, { quantity });
    if (res.success) {
      setItems(prev => [
        ...prev.filter(item => item.id != itemId),
        res.listItem
      ])
    }
  }

  const handleUpdateItem = async (itemId: string, item: string) => {
    const res = await updateItem(itemId, { item });
    if (res.success) {
      setItems(prev => [
        ...prev.filter(item => item.id != itemId),
        res.listItem
      ])
    }
  }

  const handleDeleteItem = async (itemId: string): Promise<void> => {
    await deleteItem(itemId);
    setItems(prev => prev.filter(item => item.id != itemId));
  }

  return (
    <View>
      <CategoryTitle 
        categoryId={category.id} 
        name={category.name} 
        setCategories={setCategories}
        locked={locked} />
      {items.map(item => {
        if (!locked) {
          return (
            <EditableListItem 
            key={item.id} 
            { ...item }
            handleUpdateItem={handleUpdateItem}
            handleUpdateQuantity={handleUpdateQuantity}
            handleDeleteItem={handleDeleteItem} />
          );
        }
        return <GroceryListItem key={item.id} { ...item } setCategory={setCategory} />
      })}
      <NewItemInput handleAdd={handleAddItem} />
    </View>
  )
}