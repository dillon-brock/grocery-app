import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { CategoryInList, ListWithDetail } from "../../types/types";
import ListCategorySection from "../ListCategorySection/ListCategorySection";

type Props = {
  list: ListWithDetail;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
}

export default function GroceryList({ list, setList }: Props) {

  return (
    <View>
      {list.categories.map((category: CategoryInList) => <ListCategorySection { ...category } setList={setList} />)}
    </View>
  )
}