import React, { Dispatch, SetStateAction } from "react";
import { ScrollView, Text, View } from "react-native";
import { PublicUser } from "../../../types/types"
import UserSearchResult from "../../molecules/UserSearchResult/UserSearchResult";
import styles from './styles';

type Props = {
  users: PublicUser[];
  searchBegun: boolean;
  setUserWantsToShareList: Dispatch<SetStateAction<boolean>>;
  setSharedUserId: Dispatch<SetStateAction<string>>;
}

export default function UserSearchResultList({ users, searchBegun, setUserWantsToShareList, setSharedUserId }: Props) {
  
  return (
    <View style={styles.content}>
      {!searchBegun &&
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Begin searching above for users you want to share with</Text>
        </View>
      }
      {users.length == 0 && searchBegun &&
        <View style={styles.messageContainer}>
          <Text style={styles.message}>No users found</Text>
        </View>
      }
      <ScrollView style={styles.listContainer}>
        {users.map(user => (
          <UserSearchResult
            key={user.id}
            { ...user }
            setUserWantsToShareList={setUserWantsToShareList}
            setSharedUserId={setSharedUserId}
          />
        ))}
      </ScrollView>
    </View>
  )
}