import { StyleSheet } from "react-native";
import { CommonScreenStyle } from "../types/types";

export const commonScreenStyles: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  title: {
    fontSize: 50,
    fontFamily: 'Avenir-Oblique'
  },
  titleContainer: {
    height: 80,
    justifyContent: 'center',
  },
  container: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  }
});