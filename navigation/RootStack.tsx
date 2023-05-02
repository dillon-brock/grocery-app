import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import EntryScreen from '../screens/EntryScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeStack from "./HomeStack";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {

  return (
    <Stack.Navigator 
      initialRouteName="Entry"
      screenOptions={{ headerShown: false }}
    >
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
        component={HomeStack}
      />
    </Stack.Navigator>
  )
}