import { useEffect, useState } from "react";
import { DatabaseErrorResponse, List } from "../types/types";
import { getLists } from "../services/lists/lists";
import { useIsFocused } from "@react-navigation/native";
import { AllListsResponse } from "../services/lists/types";

export function useAllLists(activeTabId: number)  {
  
  const isFocused: boolean = useIsFocused();
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const listsData: AllListsResponse | DatabaseErrorResponse = await getLists();
        if (listsData.success) {
          setLists(listsData.lists);
        } 
        else {
          setErrorMessage(`ERR CODE ${listsData.status}: ${listsData.message}`);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };
    fetchLists();
  }, [isFocused, activeTabId]);

  return { lists, loading, errorMessage, setErrorMessage };
}