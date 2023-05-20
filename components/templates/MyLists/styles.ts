import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../../types/types";
import { commonScreenStyles } from "../../../styles/universal";

interface MyListsStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
  listsContainer: ViewStyle;
  scrollContainer: ViewStyle;
  subtitle: TextStyle;
}

export default StyleSheet.create<MyListsStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    width: '80%',
    borderColor: 'black',
  },
  listsContainer: {
    width: '100%',
    padding: 20
  },
  scrollContainer: {
    width: '100%',
    padding: 20,
  },
  subtitle: {
    fontSize: 30,
    fontFamily: 'Avenir-Oblique',
    textAlign: 'left',
    marginBottom: 10
  }
})