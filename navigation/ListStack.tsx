import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllListsScreen from "../screens/AllListsScreen/AllListsScreen";
import ListDetailScreen from "../screens/ListDetailScreen/ListDetailScreen";
import HeaderWithBackButton from "../components/headers/HeaderWithBackButton/HeaderWithBackButton";
import { ListStackParamList } from "../types/types";

const Stack = createNativeStackNavigator<ListStackParamList>();

export default function ListStack() {

  return (
    <Stack.Navigator 
      initialRouteName="Lists"
      screenOptions={{ header: () => <HeaderWithBackButton /> }}
    >
      <Stack.Screen name="Lists" component={AllListsScreen} />
      <Stack.Screen name="ListDetail" component={ListDetailScreen} />
    </Stack.Navigator>
  )
}