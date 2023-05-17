import React from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/types";

export default function ShareScreen() {

  const { id, name, type } = useRoute<RouteProp<HomeStackParamList, 'Share'>>().params;
  
  return (
    <View>
      <Header showBackButton showMenuButton />
      <Text>{`${name}, ${type}`}</Text>
    </View>
  )
}