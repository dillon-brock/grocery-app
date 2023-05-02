import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ListLinkStyle = {
  container: ViewStyle;
  title: TextStyle;
  icon: TextStyle;
}

export default StyleSheet.create<ListLinkStyle>({
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