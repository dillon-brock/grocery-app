import React from 'react';
import { View } from "react-native";
import BackButton from '../../BackButton/BackButton';
import styles from '../header-styles';
import MenuIcon from '../../MenuIcon/MenuIcon';

export default function HeaderWithBackButton() {

  
  return (
    <View style={{...styles.header, ...styles.headerWithBackButton}}>
      <BackButton />
      <MenuIcon />
    </View>
  )
}