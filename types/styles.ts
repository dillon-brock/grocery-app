import { TextStyle, ViewStyle } from "react-native";

export interface CommonScreenStyle  {
  title: TextStyle;
  container: ViewStyle;
}

export interface DashboardScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}

export interface EntryScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}