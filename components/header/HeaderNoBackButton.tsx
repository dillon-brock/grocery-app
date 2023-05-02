import React from 'react';
import { View } from "react-native";
import styles from '../../styles/header';
import MenuIcon from '../menu/MenuIcon';

export default function HeaderNoBackButton() {
  
  return (
    <View style={{...styles.header, ...styles.headerNoBackButton}}>
      <MenuIcon />
    </View>
  )
}