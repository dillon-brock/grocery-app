import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from "react-native";
import MenuItem from '../MenuItem/MenuItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from '../../context/UserContext';
import styles from './styles';
import { useMenuContext } from '../../context/MenuContext';

export default function Menu() {

  const { setUser } = useUserContext();
  const { setMenuOpen } = useMenuContext();

  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleGoHome = () => {
    setMenuOpen(false);
    navigation.navigate("Dashboard");
  }

  const handleGoToLists = () => {
    setMenuOpen(false);
    navigation.navigate("ListStack", { screen: "Lists" });
  }

  const handleLogOut = async () => {
    setMenuOpen(false);
    await AsyncStorage.removeItem('@token');
    setUser(null);
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