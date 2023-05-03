import { StyleSheet, ViewStyle } from "react-native";

export type HeaderStyle = {
  header: ViewStyle;
  headerWithBackButton: ViewStyle;
  headerNoBackButton: ViewStyle;
}

export default StyleSheet.create<HeaderStyle>({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'light gray',
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 2,
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerWithBackButton: {
    justifyContent: 'space-between',
  },
  headerNoBackButton: {
    justifyContent: 'flex-end'
  }
});