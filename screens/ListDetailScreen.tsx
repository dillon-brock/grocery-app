import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/types";
import BackButton from "../components/BackButton";
import { useList } from "../hooks/useList";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<RootStackParamList, 'ListDetail'>>().params;
  const { list, loading, errorMessage } = useList(listId);
  const dateCreated = new Date(list.createdAt).toDateString();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;


  return (
    <View>
      <BackButton />
      <Text>
          {list.title ? list.title : placeholderTitle}
      </Text>
      {errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {loading &&
        <Text>Loading...</Text>
      }
    </View>
  )
}