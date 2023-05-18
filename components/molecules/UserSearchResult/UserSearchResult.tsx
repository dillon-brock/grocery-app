import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import styles from './styles';

type Props = {
  id: string;
  username: string;
  setUserWantsToShareList: Dispatch<SetStateAction<boolean>>;
  setSharedUserId: Dispatch<SetStateAction<string>>;
}

export default function UserSearchResult({ id, username, setUserWantsToShareList, setSharedUserId }: Props) {

  const handlePress = () => {
    setSharedUserId(id);
    setUserWantsToShareList(true);
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{username}</Text>
      <Ionicons name="chevron-forward-outline" size={25}/>
    </Pressable>
  )
}