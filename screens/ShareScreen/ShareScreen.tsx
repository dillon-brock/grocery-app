import React, { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import Header from "../../components/molecules/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/types";
import { useSearchUsers } from "../../hooks/useSearchUsers";
import ShareModal from "../../components/organisms/ShareModal/ShareModal";
import UserSearchInput from "../../components/molecules/UserSearchInput/UserSearchInput";
import UserSearchResultList from "../../components/organisms/UserSearchResultsList/UserSearchResultsList";
import styles from './styles';
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";

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
    <View style={styles.pageContainer}>
      <Header showBackButton showMenuButton />
      <ScreenTitle text={`Share ${name}`} color='#E16A64' />
      <UserSearchInput 
        value={username} 
        handleChange={handleChangeUsername} />
      <UserSearchResultList 
        users={users}
        searchBegun={searchBegun}
        setUserWantsToShareList={setUserWantsToShareList}
        setSharedUserId={setSharedUserId} />
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