import { StyleSheet } from "react-native";
import { CommonScreenStyle } from "../../types/types";

export default StyleSheet.create<CommonScreenStyle>({
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
    backgroundColor: 'rgba(243, 207, 198, 0.6)',
    height: '100%'
  }
});