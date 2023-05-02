import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import EntryScreen from '../screens/EntryScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AllListsScreen from "../screens/AllListsScreen";
import ListDetailScreen from "../screens/ListDetailScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Entry"
        component={EntryScreen}
      />
      <Stack.Screen
        name="Login"
        component={LogInScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
      />
      <Stack.Screen
        name="Lists"
        component={AllListsScreen}
      />
      <Stack.Screen
        name="ListDetail"
        component={ListDetailScreen}
      />
    </Stack.Navigator>
  )
}