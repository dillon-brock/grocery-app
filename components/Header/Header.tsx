import React from "react";
import { View } from "react-native";
import styles from './styles';
import BackButton from "../BackButton/BackButton";
import MenuIcon from "../MenuIcon/MenuIcon";

type Props = {
  showBackButton: boolean;
  showMenuButton: boolean;
}

export default function Header({ showBackButton, showMenuButton }: Props) {
  return (
    <View style={[
      styles.header, 
      { justifyContent: showBackButton ? 'space-between' : 'flex-end' }
    ]}>
      {showBackButton && <BackButton />}
      {showMenuButton && <MenuIcon />}
    </View>
  )
}