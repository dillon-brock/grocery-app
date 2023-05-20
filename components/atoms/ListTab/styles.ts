import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type ListTabStyle = {
  container: ViewStyle;
  tab: ViewStyle;
  name: TextStyle;
  active: ViewStyle;
}

export default StyleSheet.create<ListTabStyle>({
  container: {
    width: '50%',
    alignItems: 'center'
  },
  tab: {
    width: '75%',
    paddingTop: 10,
    paddingBottom: 12
  },
  name: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Avenir-Oblique'
  },
  active: {
    borderBottomColor: '#E16A64',
    borderBottomWidth: 3
  }
})