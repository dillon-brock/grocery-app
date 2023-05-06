import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import { MenuProvider } from './context/MenuContext';
import Menu from './components/Menu/Menu';
import RootStack from './navigation/RootStack';


export default function App() {

  return (
    <UserProvider>
      <MenuProvider>
        <NavigationContainer>
          <Menu />
          <RootStack />
        </NavigationContainer>
      </MenuProvider>
    </UserProvider>
  );
}
