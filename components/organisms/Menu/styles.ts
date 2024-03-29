import { StyleSheet, ViewStyle } from "react-native";

export type MenuStyle = {
  container: ViewStyle;
  menu: ViewStyle;
  closeButton: ViewStyle;
}

export default StyleSheet.create<MenuStyle>({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundColor: 'white',
    paddingTop: 80,
  },
  menu: {
    position: "relative",
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 10,
    paddingTop: 10,
  },
  closeButton: {
    position: "absolute",
    right: 26,
    top: -14,
    fontWeight: '800'
  }
})