import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";

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
    <View>
      <Pressable onPress={handlePress}>
        <Text>{username}</Text>
        <Ionicons name="chevron-forward-outline" size={25}/>
      </Pressable>
    </View>
  )
}