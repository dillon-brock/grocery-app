import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type StepDisplayStyle = {
  container: ViewStyle;
  subsection: ViewStyle;
  numContainer: ViewStyle;
  num: TextStyle;
  detailContainer: ViewStyle;
  detail: TextStyle;
}

export default StyleSheet.create<StepDisplayStyle>({
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
    alignItems: 'center'
  },
  num: {
    fontWeight: '700',
    fontSize: 16
  },
  detailContainer: {},
  detail: {
    fontSize: 16
  }
});