import { StyleSheet } from "react-native";
import { MenuStyle } from "../types/styles";

export default StyleSheet.create<MenuStyle>({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    width: '75%',
    height: '100%',
    zIndex: 10,
    backgroundColor: 'white',
  },
  menu: {
    position: "relative",
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 10,
  }
})