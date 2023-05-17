import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type EditableTitleStyle = {
  outerContainer: ViewStyle;
  textContainer: ViewStyle;
  title: TextStyle;
}

export const defaultStyles = StyleSheet.create<EditableTitleStyle>({
  outerContainer: {},
  textContainer: {},
  title: {}
})

export const categoryStyles = StyleSheet.create<EditableTitleStyle>({
  outerContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    paddingLeft: 15,
  },
  title: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 22,
    color: '#4A757E',
    textAlign: 'left'
  }
})

export const listStyles = StyleSheet.create<EditableTitleStyle>({
  outerContainer: {},
  textContainer: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir-Oblique',
    color: '#E16A64'
  }
})