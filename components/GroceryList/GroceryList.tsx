import React, { Dispatch, SetStateAction } from "react";
import { CategoryInList, ListWithDetail } from "../../types/types";
import ListCategorySection from "../ListCategorySection/ListCategorySection";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  list: ListWithDetail;
  setList: Dispatch<SetStateAction<ListWithDetail>>;
  categories: CategoryInList[];
  setCategories: Dispatch<SetStateAction<CategoryInList[]>>;
  loading: boolean;
  locked: boolean;
}

export default function GroceryList({ list, setList, loading, locked, categories, setCategories }: Props) {

  return (
    <ScrollView style={{ width: '90%' }}>
      {!loading &&
        categories
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
        .map((category: CategoryInList) => (
          <ListCategorySection key={category.id} { ...category } 
          setList={setList} setCategories={setCategories} listId={list.id} locked={locked} />
        ))
      }
    </ScrollView>
  )
}