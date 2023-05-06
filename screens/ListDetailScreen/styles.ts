import { StyleSheet } from "react-native";
import { CommonScreenStyle } from "../../types/types";

export default StyleSheet.create<CommonScreenStyle>({
  title: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir-Oblique'
  },
  titleContainer: {
    // height: 60,
    justifyContent: 'center',
  },
  container: {
    gap: 16,
    alignItems: 'center',
    paddingTop: 16,
  }
});