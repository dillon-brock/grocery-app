import { useEffect, useState } from "react";
import { List } from "../types/types";
import { getLists } from "../services/lists/lists";

export function useAllLists()  {

  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const listsData = await getLists();
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
  }, []);

  return { lists, loading, errorMessage };
}