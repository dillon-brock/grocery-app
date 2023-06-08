import React, { Dispatch, Reducer, SetStateAction, useReducer } from "react";
import { View } from "react-native";
import { CategoryInList, ListItem } from "../../../types/types";
import GroceryListItem from "../../molecules/GroceryListItem/GroceryListItem";
import NewItemInput from "../../molecules/NewItemInput/NewItemInput";
import EditableListItem from "../../molecules/EditableListItem/EditableListItem";
import { addItemToList, deleteItem, updateItem } from "../../../services/list-items/list-items";
import { updateCategory } from "../../../services/categories/categories";
import EditableTitle from "../../molecules/EditableTitle/EditableTitle";
import listItemsReducer, { ListItemAction } from "../../../reducers/listItems";

type Props = {
  category: CategoryInList;
  setCategory: Dispatch<SetStateAction<CategoryInList>>;
  listId: string;
  locked: boolean;
}

export default function ListCategorySection({ category, setCategory, listId, locked }: Props) {

  const [items, dispatch] = useReducer<Reducer<ListItem[], ListItemAction>>(listItemsReducer, category.items);

  const handleAddItem = async (item: string, quantity: string): Promise<void> => {
    const res = await addItemToList({ 
      listId, 
      item, 
      quantity: quantity || null,
      categoryId: category.id
    });

    if (res.success) {
      dispatch({
        type: 'added',
        item: res.listItem
      });
    }
  }

  const handleUpdateQuantity = async (itemId: string, quantity: string) => {
    const res = await updateItem(itemId, { quantity });
    if (res.success) {
      dispatch({
        type: 'updated',
        item: res.listItem,
        itemId
      })
    }
  }

  const handleUpdateItem = async (itemId: string, item: string) => {
    const res = await updateItem(itemId, { item });
    if (res.success) {
      dispatch({
        type: 'updated',
        item: res.listItem,
        itemId
      })
    }
  }

  const handleDeleteItem = async (itemId: string): Promise<void> => {
    await deleteItem(itemId);
    dispatch({ type: 'deleted', itemId });
  }

  const handleUpdateTitle = async (title: string): Promise<void> => {
    const res = await updateCategory({ id: category.id, name: title });
    if (res.success) {
      setCategory(res.category)
    }
  }

  return (
    <View>
      <EditableTitle
        handleUpdateTitle={handleUpdateTitle}
        type='category'
        title={category.name}
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
        return <GroceryListItem 
          key={item.id} 
          { ...item } 
          dispatch={dispatch} />
      })}
      <NewItemInput handleAdd={handleAddItem} />
    </View>
  )
}