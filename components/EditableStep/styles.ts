import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type EditableStepStyle = {
  container: ViewStyle;
  subsection: ViewStyle;
  numContainer: ViewStyle;
  num: TextStyle;
  inputContainer: ViewStyle;
  inputText: TextStyle;
  inputView: ViewStyle;
}

export default StyleSheet.create<EditableStepStyle>({
  container: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4
  },
  subsection: {
    justifyContent: 'flex-start'
  },
  numContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4
  },
  num: {
    fontWeight: '700',
    fontSize: 16
  },
  inputContainer: {
    alignItems: "flex-start"
  },
  inputText: {
    fontSize: 16
  },
  inputView: {}
});