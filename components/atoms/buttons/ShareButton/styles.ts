import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type ShareButtonStyle = {
  button: ViewStyle;
  buttonText: TextStyle;
  buttonContainer: ViewStyle;
}

export default StyleSheet.create<ShareButtonStyle>({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderColor: '#E16A64',
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E16A64'
  },
  buttonContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 145,
    left: 30
  }
})