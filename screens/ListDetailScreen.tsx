import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { ListStackParamList } from "../types/types";
import { useList } from "../hooks/useList";
import { listDetailScreenStyles as styles } from "../styles/screens";

export default function ListDetailScreen() {

  const { listId, type } = useRoute<RouteProp<ListStackParamList, 'ListDetail'>>().params;
  const { list, loading, errorMessage } = useList(listId);
  const dateCreated = new Date(list.createdAt).toDateString();

  const placeholderTitle = type == 'new' ? 'New List' : dateCreated;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
            {list.title ? list.title : placeholderTitle}
        </Text>
      </View>
      {errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {loading &&
        <Text>Loading...</Text>
      }
    </View>
  )
}