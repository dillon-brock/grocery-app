import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RouteParamList } from "../types/types";

export default function ListDetailScreen() {

  const { list } = useRoute<RouteProp<RouteParamList, 'ListDetail'>>().params;

  return (
    <View>
      <Text>{list.title || 'New List'}</Text>
    </View>
  )
}