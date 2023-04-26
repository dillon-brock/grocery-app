import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "../../types/types";
import DashboardScreen from "../../screens/DashboardScreen";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={DashboardScreen} />
    </HomeStack.Navigator>
  )

}