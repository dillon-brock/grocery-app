import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from "react-native";
import MenuItem from './MenuItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList, RootStackParamList } from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from '../context/UserContext';
import styles from '../styles/menu';

export default function Menu() {

  const { setUser } = useUserContext();

  const homeNavigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoHome = () => {
    homeNavigation.navigate("Dashboard");
  }

  const handleGoToLists = () => {
    homeNavigation.navigate("Lists");
  }

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('@token');
    setUser(null);
    rootNavigation.navigate("Entry");
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <MenuItem 
          text="Home" 
          handlePress={handleGoHome}
        />
        <MenuItem
          text="My Lists"
          handlePress={handleGoToLists}
        />
        <MenuItem
          text = "Log out"
          handlePress={handleLogOut}
        />
      </View>
    </View>
  )
}