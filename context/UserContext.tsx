import React, { useContext } from "react";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";
import { UserResponse } from "../services/auth/types";
import { getUser } from "../services/auth/auth";
import { DatabaseErrorResponse } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface User {
  id: string;
  email: string;
  username: string;
}

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  doneGettingUser: boolean;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserProvider = ({ children }: PropsWithChildren) => {

  const [user, setUser] = useState<User | null>(null);
  const [doneGettingUser, setDoneGettingUser] = useState<boolean>(false);

  useEffect(() => {
  
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('@token');
      console.log(token);
      if (!token) {
        setDoneGettingUser(true);
        setUser(null);
        return;
      }
      else {
        try {
          const data: UserResponse | DatabaseErrorResponse = await getUser(token);
          if (data.success) {
            setUser(data.user);
            setDoneGettingUser(true);
          }
        } catch (e) {
          setDoneGettingUser(true);
          console.error(e);
        }
      }
    };
    fetchUser();
  }, [])

  return <UserContext.Provider value={{ user, setUser, doneGettingUser }}>{children}</UserContext.Provider>;
}

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, UserContext, useUserContext };