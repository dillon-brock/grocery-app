import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/types";
import BackButton from "../components/BackButton";

export default function ListDetailScreen() {

  const { list, type } = useRoute<RouteProp<RootStackParamList, 'ListDetail'>>().params;
  const dateCreated: string = new Date(list.createdAt).toDateString();

  return (
    <View>
      <BackButton />
      <Text>
        {list.title ? list.title :
        (type == 'new' ? 'New List' : dateCreated )}
      </Text>
    </View>
  )
}