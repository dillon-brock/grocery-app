import React from 'react';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import ListStack from './ListStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/types';
import RecipeStack from './RecipeStack';
import ShareScreen from '../screens/ShareScreen/ShareScreen';
import MealPlansScreen from '../screens/MealPlansScreen/MealPlansScreen';

export default function HomeStack() {

  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
      <Stack.Navigator 
        initialRouteName='Dashboard'
        screenOptions={{
          headerShown: false
        }} 
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
        />
        <Stack.Screen 
          name="ListStack" 
          component={ListStack} 
        />
        <Stack.Screen
          name="RecipeStack"
          component={RecipeStack}
        />
        <Stack.Screen
          name="Share"
          component={ShareScreen}
        />
        <Stack.Screen
          name="Meal Plans"
          component={MealPlansScreen}
        />
      </Stack.Navigator>
  )
}