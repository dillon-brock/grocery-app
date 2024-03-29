import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type PrimaryButtonStyle = {
  button: ViewStyle;
  buttonText: TextStyle;
}

export default StyleSheet.create<PrimaryButtonStyle>({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
})