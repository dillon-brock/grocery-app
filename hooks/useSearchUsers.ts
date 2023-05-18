import { useEffect, useState } from "react";
import { PublicUser } from "../types/types";
import { searchUsers } from "../services/users/users";

export function useSearchUsers(username: string, searchBegun: boolean)  {
  
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await searchUsers(username);
      if (res.success) {
        setUsers(res.users);
      }
    }
    if (searchBegun) {
      fetchUsers();
    }
  }, [username])

  return { users, setUsers, error, setError };
}