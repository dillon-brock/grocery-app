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
    marginTop: 16
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#E16A64',
    borderWidth: 3,
    padding: '12 8'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#E16A64'
  }
})