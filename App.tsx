import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthEntry from './components/AuthEntry';
import LogInScreen from './components/LogInScreen';
import SignUpScreen from './components/SignUpScreen';
import { RootStackParamList } from './types/props';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={AuthEntry}
        />
        <Stack.Screen
          name="Login"
          component={LogInScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
