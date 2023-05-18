import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type DetailLinkStyle = {
  container: ViewStyle;
  title: TextStyle;
  icon: TextStyle;
}

export default StyleSheet.create<DetailLinkStyle>({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 18
  }
}); 