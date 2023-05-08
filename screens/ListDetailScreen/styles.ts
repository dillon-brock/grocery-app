import { StyleSheet, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../types/types";

interface ListDetailScreenStyle extends CommonScreenStyle {
  pageContainer: ViewStyle;
  lockButtonContainer: ViewStyle;
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
    backgroundColor: 'rgba(243, 207, 198, 0.6)',
    height: '100%'
  },
  lockButtonContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 145,
    right: 30
  }
});