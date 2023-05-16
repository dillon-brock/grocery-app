import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { CategoryInList, ListItem, ListWithDetail } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";
import NewItemInput from "../NewItemInput/NewItemInput";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import EditableListItem from "../EditableListItem/EditableListItem";
import { addItemToList, deleteItem, updateItem } from "../../services/list-items/list-items";
import { updateItemInState } from "../../utils";

type Props = {
  id: string;
  name: string;
  items: ListItem[];
  listId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
  setCategories: Dispatch<SetStateAction<CategoryInList[]>>;
  locked: boolean;
}

export default function ListCategorySection({ id, name, items, listId, setList, locked, setCategories }: Props) {

  const handleAddItem = async (item: string, quantity: string): Promise<void> => {
    const addItemRes = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity || null,
      categoryId: id
    });

    if (addItemRes.success) {
      setList((prev: ListWithDetail) => {
        const category = prev.categories.find(c => c.id == id);
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
            ...prev.categories.filter(c => c.id != id),
            updatedCategory
          ]
        }
      });
    }
  }

  const handleUpdateQuantity = async (itemId: string, quantity: string) => {
    const updateRes = await updateItem(itemId, { quantity });
    if (updateRes.success) {
      setList(prev => {
        const newListState = updateItemInState({
          prev,
          categoryId: id,
          itemId,
          prop: 'quantity',
          val: quantity || null
        });
        
        return newListState;
      })
    }
  }

  const handleUpdateItem = async (itemId: string, item: string) => {
    const updateRes = await updateItem(id, { item });
    if (updateRes.success) {
      setList(prev => {
        const newListState = updateItemInState({
          prev,
          categoryId: id,
          itemId,
          prop: 'item',
          val: item
        });

        return newListState;
      })
    }
  }

  const handleDeleteItem = async (itemId: string): Promise<void> => {
    await deleteItem(itemId);
    setList((prev: ListWithDetail) => {
      const category = prev.categories.find(category => category.id == id);
      if (!category) return prev;
      const updatedCategory = {
        ...category,
        items: category?.items.filter(item => item.id != itemId)
      };
      if (!updatedCategory) return prev;
      return {
      ...prev,
      categories: [
        ...prev.categories.filter(category => category.id != id),
        updatedCategory 
      ]
    }});
  }

  return (
    <View>
      <CategoryTitle 
        categoryId={id} 
        name={name} 
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
        return <GroceryListItem key={item.id} { ...item } setList={setList} />
      })}
      <NewItemInput handleAdd={handleAddItem} />
    </View>
  )
}