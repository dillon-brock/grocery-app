import React from 'react';
import { Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BackButton from './BackButton';
import styles from '../styles/header';

export default function HeaderWithBackButton() {

  const handleToggleMenu = () => {
    console.log('menu toggled');
  }
  
  return (
    <View style={styles.header}>
      <BackButton />
      <Pressable onPressOut={handleToggleMenu}>
        <Ionicons 
          name="ios-menu-outline"
          size={30} />
      </Pressable>
    </View>
  )
}