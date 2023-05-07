import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ListItemStyle = {
  container: ViewStyle;
  checkmarkContainer: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<ListItemStyle>({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    gap: 4,
    marginTop: 3,
    marginBottom: 3
  },
  checkmarkContainer: {
    width: 20
  },
  text: {
    fontSize: 16
  }
})