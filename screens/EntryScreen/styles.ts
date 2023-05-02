import { StyleSheet, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../types/types";
import { commonScreenStyles } from "../../styles/universal";

export interface EntryScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}

export default StyleSheet.create<EntryScreenStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  },
});
