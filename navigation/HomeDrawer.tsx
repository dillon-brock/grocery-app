import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../screens/DashboardScreen';
import ListStack from './ListStack';

export default function HomeStack() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Dashboard' 
        screenOptions={{ drawerPosition: 'right' }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Lists" component={ListStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}