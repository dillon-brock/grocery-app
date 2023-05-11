import React from 'react';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import ListStack from './ListStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/types';
import RecipeStack from './RecipeStack';

export default function HomeStack() {

  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
      <Stack.Navigator 
        initialRouteName='Dashboard' 
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ListStack" 
          component={ListStack} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeStack"
          component={RecipeStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}