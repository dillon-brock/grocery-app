import React, { Dispatch, SetStateAction } from "react";
import { ScrollView, Text } from "react-native";
import { PublicUser } from "../../../types/types"
import UserSearchResult from "../../molecules/UserSearchResult/UserSearchResult";

type Props = {
  users: PublicUser[];
  searchBegun: boolean;
  setUserWantsToShareList: Dispatch<SetStateAction<boolean>>;
  setSharedUserId: Dispatch<SetStateAction<string>>;
}

export default function UserSearchResultList({ users, searchBegun, setUserWantsToShareList, setSharedUserId }: Props) {
  
  return (
    <ScrollView>
      {!searchBegun &&
        <Text>Begin searching above for users you want to share with</Text>
      }
      {users.length == 0 && searchBegun &&
        <Text>No users found</Text>
      }
      {users.map(user => (
        <UserSearchResult
          key={user.id}
          { ...user }
          setUserWantsToShareList={setUserWantsToShareList}
          setSharedUserId={setSharedUserId}
        />
      ))}
    </ScrollView>
  )
}