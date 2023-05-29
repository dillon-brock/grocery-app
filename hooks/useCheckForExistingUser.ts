import { useEffect, useState } from "react";
import { checkForUsername } from "../services/users/users";

export function useCheckForExistingUser(username: string): boolean {

  const [userFound, setUserFound] = useState<boolean>(false);

  if (username !== '') {
    useEffect(() => {
      const checkForUser = async () => {
        const res = await checkForUsername(username);
        if (res.success) {
          setUserFound(!!res.user);
        }
      }
      checkForUser();
    }, [username]);
  }

  return userFound
}