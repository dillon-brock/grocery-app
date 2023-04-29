import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './screens/EntryScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { RootStackParamList } from './types/types';
import HomeNavigator from './components/navigation/HomeNavigator';
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
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
            component={HomeNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
