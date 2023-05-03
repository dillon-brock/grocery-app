import { StyleSheet, ViewStyle } from "react-native";

type AuthFormStyle = {
  container: ViewStyle;
  buttonContainer: ViewStyle
}

export default StyleSheet.create<AuthFormStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  }
})