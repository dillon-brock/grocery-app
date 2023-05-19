import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface ListDetailScreenStyle {
  container: ViewStyle;
  pageContainer: ViewStyle;
  shareButton: ViewStyle;
  shareButtonText: TextStyle;
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
  },
  shareButton: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderColor: '#E16A64',
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5
  },
  shareButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E16A64'
  }
});