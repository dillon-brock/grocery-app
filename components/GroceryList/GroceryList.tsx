import React, { Dispatch, SetStateAction } from "react";
import { FlatList, View } from "react-native";
import { ListItem, ListWithItems } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";

type Props = {
  listItems: ListItem[];
  setList: Dispatch<SetStateAction<ListWithItems>>;
}

export default function GroceryList({ listItems, setList }: Props) {

  return (
    <View>
      <FlatList
        data={listItems}
        renderItem={({ item: listItem }: { item: ListItem }) => (
          <GroceryListItem { ...listItem } setList={setList} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}