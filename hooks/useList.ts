import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { CategoryInList, DatabaseErrorResponse, ListWithDetail } from "../types/types";
import { getListById } from "../services/lists/lists";
import { GetListResponse } from "../services/lists/types";

const defaultList = {
  id: '',
  ownerId: '',
  createdAt: '',
  updatedAt: '',
  title: null,
  categories: [{
    id: '',
    name: '',
    items: [
      {
        id: '',
        item: '',
        listId: '',
        bought: false,
        quantity: null,
        categoryId: ''
      }
    ]
  }]
}

export function useList(id: string) {

  const isFocused: boolean = useIsFocused();
  const [list, setList] = useState<ListWithDetail>(defaultList);
  const [categories, setCategories] = useState<CategoryInList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchList = async () => {
      try {
        const listData: GetListResponse | DatabaseErrorResponse = await getListById(id);
        if (listData.success) {
          setList(listData.list);
          setCategories(listData.list.categories);
        } else {
          setErrorMessage(`ERR CODE ${listData.status}: ${listData.message}`);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    }
    fetchList();
  }, [id, isFocused]);

  return { 
    list, setList, 
    categories, setCategories, 
    loading, errorMessage 
  };
}