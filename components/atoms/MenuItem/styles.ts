import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type MenuItemStyle = {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<MenuItemStyle>({
  container: {
    padding: 18
  },
  text: {
    fontSize: 20
  }
})