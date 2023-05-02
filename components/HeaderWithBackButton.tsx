import React from 'react';
import { View } from "react-native";
import BackButton from './BackButton';
import styles from '../styles/header';
import MenuIcon from './MenuIcon';

export default function HeaderWithBackButton() {

  
  return (
    <View style={{...styles.header, ...styles.headerWithBackButton}}>
      <BackButton />
      <MenuIcon />
    </View>
  )
}