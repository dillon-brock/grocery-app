import { StyleSheet } from "react-native";
import { MenuStyle } from "../types/styles";

export default StyleSheet.create<MenuStyle>({
  container: {
    position: "relative",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  menu: {
    position: "absolute",
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 50,
    width: '75%'
  }
})