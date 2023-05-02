import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { DatabaseErrorResponse, ListWithItems } from "../types/types";
import { getListById } from "../services/lists/lists";
import { GetListResponse } from "../services/lists/types";

export function useList(id: string) {

  const isFocused: boolean = useIsFocused();
  const [list, setList] = useState<ListWithItems>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchList = async () => {
      try {
        const listData: GetListResponse | DatabaseErrorResponse = await getListById(id);
        if (listData.success) {
          setList(listData.list);
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

  return { list, setList, loading, errorMessage };
}