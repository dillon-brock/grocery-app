import React from 'react';
import { Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/header';

export default function HeaderNoBackButton() {

  const handleToggleMenu = () => {
    console.log('menu toggled');
  }
  
  return (
    <View style={{...styles.header, ...styles.headerNoBackButton}}>
      <Pressable onPressOut={handleToggleMenu}>
        <Ionicons 
          name="ios-menu-outline"
          size={30} />
      </Pressable>
    </View>
  )
}