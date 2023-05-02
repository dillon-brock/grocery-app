import { StyleSheet, ViewStyle } from "react-native";
import { commonScreenStyles } from "../../styles/universal";
import { CommonScreenStyle } from "../../types/types";

interface DashboardScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}

export default StyleSheet.create<DashboardScreenStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    gap: 40
  }
});