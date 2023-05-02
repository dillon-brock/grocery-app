import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import RootStack from './navigationStacks/RootStack';


export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserProvider>
  );
}
