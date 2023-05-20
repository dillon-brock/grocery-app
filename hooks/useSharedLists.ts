import { useEffect, useState } from "react";
import { List } from "../types/types";
import { getSharedLists } from "../services/list-shares/list-shares";
import { useIsFocused } from "@react-navigation/native";

export function useSharedLists(activeTabId: number) {

  const isFocused = useIsFocused();
  const [sharedLists, setSharedLists] = useState<List[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLists = async (): Promise<void> => {
      const res = await getSharedLists();
      if (res.success) {
        setSharedLists(res.sharedLists);
      } else {
        setError(res.message);
      }
      setLoading(false);
    };
    fetchLists();
  }, [isFocused, activeTabId])

  return { sharedLists, setSharedLists, error, loading };

}