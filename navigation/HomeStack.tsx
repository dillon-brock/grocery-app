import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import ListStack from './ListStack';
import HeaderNoBackButton from '../components/HeaderNoBackButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeStack() {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator 
        initialRouteName='Dashboard' 
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{
            header: () => <HeaderNoBackButton />
          }} />
        <Stack.Screen 
          name="Lists" 
          component={ListStack} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}