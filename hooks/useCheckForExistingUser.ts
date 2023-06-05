import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { checkForUsername } from "../services/users/users";

type ExistingUserState = {
  usernameIsValid: boolean;
  setUsernameIsValid: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  usernameError: string;
  setUsernameError: Dispatch<SetStateAction<string>>;
}

export function useCheckForExistingUser(username: string): ExistingUserState {

  const [usernameIsValid, setUsernameIsValid] = useState<boolean>(true);
  const [usernameError, setUsernameError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const checkForUser = async () => {
        if (username === '') {
          setUsernameIsValid(true);
          setLoading(false);
          return;
        }
        const res = await checkForUsername(username);
        if (res.success) {
          setUsernameIsValid(!res.user);
          setUsernameError(res.user ? 'Username already exists' : '');
        }
        setLoading(false);
      }
      checkForUser();
    }, [username]);

  return { usernameIsValid, setUsernameIsValid, usernameError, setUsernameError, loading };
}