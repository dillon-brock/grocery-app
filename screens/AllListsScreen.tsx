import React from "react";
import { Pressable, Text, View } from "react-native";
import { useAllLists } from "../hooks/useAllLists";
import { useCheckForLogOut } from "../hooks/useCheckForLogOut";

export default function AllListsScreen() {

  const { lists, errorMessage, loading } = useAllLists();

  useCheckForLogOut();

  return (
    <View>
      <Text>Your Lists</Text>
      {lists.length == 0 &&
        <Text>You do not have any lists yet!</Text>
      }
      {errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {loading &&
        <Text>Loading...</Text>
      }
      <Pressable>
        <Text>Start Shopping</Text>
      </Pressable>
    </View>
  );
}