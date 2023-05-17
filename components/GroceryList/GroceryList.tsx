import React, { useState } from "react";
import { CategoryInList, ListWithDetail } from "../../types/types";
import ListCategorySection from "../ListCategorySection/ListCategorySection";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  list: ListWithDetail;
  categories: CategoryInList[];
  loading: boolean;
  locked: boolean;
}

export default function GroceryList({ list, loading, locked, categories }: Props) {

  return (
    <ScrollView style={{ width: '90%' }}>
      {!loading &&
        categories
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
        .map((c: CategoryInList) => {
          const [category, setCategory] = useState<CategoryInList>(c);
          return <ListCategorySection
            category={category}
            setCategory={setCategory}
            key={category.id} 
            listId={list.id} 
            locked={locked} />
        })
      }
    </ScrollView>
  )
}