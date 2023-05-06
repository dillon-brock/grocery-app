import React, { Dispatch, SetStateAction } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem, ListWithDetail } from "../../types/types";
import GroceryListItem from "../GroceryListItem/GroceryListItem";

type Props = {
  name: string;
  items: ListItem[];
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function ListCategorySection({ name, items, setList }: Props) {

  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        data={items}
        renderItem={({ item: listItem }: { item: ListItem }) => (
          <GroceryListItem { ...listItem } setList={setList} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}