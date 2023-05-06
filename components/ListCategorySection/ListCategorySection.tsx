import React, { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { ListItem, ListWithDetail } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";
import NewItemInput from "../NewItemInput/NewItemInput";

type Props = {
  id: string;
  name: string;
  items: ListItem[];
  listId: string;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function ListCategorySection({ id, name, items, listId, setList }: Props) {

  return (
    <View>
      <Text>{name}</Text>
      {items.map(item => (
        <GroceryListItem key={item.id} { ...item } setList={setList} />
      ))}
      <NewItemInput categoryId={id} setList={setList} listId={listId} />
    </View>
  )
}