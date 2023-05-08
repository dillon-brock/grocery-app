import React from 'react';
import { View } from "react-native";
import styles from '../header-styles';
import MenuIcon from '../../MenuIcon/MenuIcon';

export default function HeaderNoBackButton() {
  
  return (
    <View style={[styles.header, styles.headerNoBackButton]}>
      <MenuIcon />
    </View>
  )
}