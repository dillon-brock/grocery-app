import { StyleSheet, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../types/types";

interface ListDetailScreenStyle extends CommonScreenStyle {
  pageContainer: ViewStyle;
}

export default StyleSheet.create<ListDetailScreenStyle>({
  title: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir-Oblique',
    color: '#E16A64'
  },
  titleContainer: {
    justifyContent: 'center',
  },
  container: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 20,
  },
  pageContainer: {
    backgroundColor: '#F7EBE8',
    height: '100%'
  }
});