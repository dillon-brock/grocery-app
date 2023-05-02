import React from 'react';
import { View } from "react-native";
import BackButton from '../../buttons/BackButton/BackButton';
import styles from '../header-styles';
import MenuIcon from '../../menu-elements/MenuIcon/MenuIcon';

export default function HeaderWithBackButton() {

  
  return (
    <View style={{...styles.header, ...styles.headerWithBackButton}}>
      <BackButton />
      <MenuIcon />
    </View>
  )
}