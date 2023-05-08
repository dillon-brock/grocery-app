import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { ListItem, ListWithDetail } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";
import NewItemInput from "../NewItemInput/NewItemInput";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import EditableListItem from "../EditableListItem/EditableListItem";

type Props = {
  id: string;
  name: string;
  items: ListItem[];
  listId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
  editable: boolean;
}

export default function ListCategorySection({ id, name, items, listId, setList, editable }: Props) {

  return (
    <View>
      <CategoryTitle categoryId={id} name={name} setList={setList} />
      {items.map(item => {
        if (editable) {
          return (
            <EditableListItem key={item.id} 
            { ...item } setList={setList} />
          );
        }
        return <GroceryListItem key={item.id} { ...item } setList={setList} />
      })}
      <NewItemInput categoryId={id} setList={setList} listId={listId} />
    </View>
  )
}