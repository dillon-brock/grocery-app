import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type AddCategoryButtonStyle = {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export default StyleSheet.create<AddCategoryButtonStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 30
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#E16A64',
    borderWidth: 3,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#E16A64'
  }
})