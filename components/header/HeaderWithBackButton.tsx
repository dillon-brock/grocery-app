import React from 'react';
import { View } from "react-native";
import BackButton from '../buttons/BackButton';
import styles from '../../styles/header';
import MenuIcon from '../menu/MenuIcon';

export default function HeaderWithBackButton() {

  
  return (
    <View style={{...styles.header, ...styles.headerWithBackButton}}>
      <BackButton />
      <MenuIcon />
    </View>
  )
}