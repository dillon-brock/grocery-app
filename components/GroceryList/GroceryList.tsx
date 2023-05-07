import React, { Dispatch, SetStateAction } from "react";
import { CategoryInList, ListWithDetail } from "../../types/types";
import ListCategorySection from "../ListCategorySection/ListCategorySection";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  list: ListWithDetail;
  loading: boolean;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
  editable: boolean;
}

export default function GroceryList({ list, setList, loading, editable }: Props) {

  return (
    <ScrollView style={{ width: '90%' }}>
      {!loading &&
        list.categories
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
        .map((category: CategoryInList) => (
          <ListCategorySection key={category.id} { ...category } 
          setList={setList} listId={list.id} editable={editable} />
        ))
      }
    </ScrollView>
  )
}