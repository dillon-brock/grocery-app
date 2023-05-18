import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type TitleStyles = {
  container: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<TitleStyles>({
  container: {
    alignItems: 'center',
    height: 80
  },
  title: {
    fontSize: 40,
    fontFamily: 'Avenir-Oblique',
    fontWeight: '600',
  }
});