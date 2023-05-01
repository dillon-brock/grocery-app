import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useAllLists } from "../hooks/useAllLists";
import { useUserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

export default function AllListsScreen() {

  const { user, doneGettingUser } = useUserContext();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { lists, errorMessage, loading } = useAllLists();

  useEffect(() => {
    if (!user && doneGettingUser) {
      navigation.navigate('Entry');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Entry' }]
      });
    }
  })

  return (
    <View>
      <Text>Your Lists</Text>
    </View>
  );
}