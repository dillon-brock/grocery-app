import { StyleSheet, ViewStyle } from "react-native";

interface ListDetailScreenStyle {
  container: ViewStyle;
  pageContainer: ViewStyle;
}

export default StyleSheet.create<ListDetailScreenStyle>({
  container: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 20,
  },
  pageContainer: {
    backgroundColor: '#F7EBE8',
    height: '100%'
  }
});