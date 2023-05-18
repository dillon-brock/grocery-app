import React, { useState } from "react";
import { NativeSyntheticEvent, Text, TextInputChangeEventData, View } from "react-native";
import Header from "../../components/molecules/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/types";
import { useSearchUsers } from "../../hooks/useSearchUsers";
import UserSearchResult from "../../components/molecules/UserSearchResult/UserSearchResult";
import ShareModal from "../../components/organisms/ShareModal/ShareModal";
import UserSearchInput from "../../components/molecules/UserSearchInput/UserSearchInput";

export default function ShareScreen() {

  const { id, name } = useRoute<RouteProp<HomeStackParamList, 'Share'>>().params;
  const [username, setUsername] = useState<string>('');
  const [sharedUserId, setSharedUserId] = useState<string>('');
  const [userWantsToShareList, setUserWantsToShareList] = useState<boolean>(false);
  const [searchBegun, setSearchBegun] = useState<boolean>(false);
  const { users } = useSearchUsers(username, searchBegun);

  const handleChangeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (!searchBegun) {
      setSearchBegun(true);
    }
    setUsername(e.nativeEvent.text);
  }

  return (
    <View>
      <Header showBackButton showMenuButton />
      <Text>{`Share ${name}`}</Text>
      <UserSearchInput 
        value={username} 
        handleChange={handleChangeUsername} />
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
      <ShareModal 
        visible={userWantsToShareList}
        setVisible={setUserWantsToShareList}
        title={name}
        userId={sharedUserId}
        listId={id}
        />
    </View>
  )
}