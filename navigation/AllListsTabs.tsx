import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import AllListsScreen from '../screens/AllListsScreen/AllListsScreen';
import SharedListsScreen from '../screens/SharedListsScreen/SharedListsScreen';

export default function AllListsTabs() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="My Lists" component={AllListsScreen} />
      <Tab.Screen name="Shared With Me" component={SharedListsScreen} />
    </Tab.Navigator>
  )
}