import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import RootStack from './components/navigation/RootStack';
import { MenuProvider } from './context/MenuContext';


export default function App() {

  return (
    <UserProvider>
      <MenuProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </MenuProvider>
    </UserProvider>
  );
}
