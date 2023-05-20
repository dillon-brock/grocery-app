import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListDetailScreen from "../screens/ListDetailScreen/ListDetailScreen";
import { ListStackParamList } from "../types/types";
import AllListsScreen from "../screens/AllListsScreen/AllListsScreen";

const Stack = createNativeStackNavigator<ListStackParamList>();

export default function ListStack() {

  return (
    <Stack.Navigator 
      initialRouteName="Lists"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Lists" component={AllListsScreen} />
      <Stack.Screen name="ListDetail" component={ListDetailScreen} />
    </Stack.Navigator>
  )
}