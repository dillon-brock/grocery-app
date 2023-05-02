import { TextStyle, ViewStyle } from "react-native";

// screen styles
export interface CommonScreenStyle  {
  title: TextStyle;
  container: ViewStyle;
  titleContainer: ViewStyle;
}

export interface DashboardScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}

export interface EntryScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
}

export interface AllListsScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
  listsContainer: ViewStyle;
  scrollContainer: ViewStyle;
  subtitle: TextStyle;
}

// component styles
export type AuthFormStyle = {
  container: ViewStyle;
  buttonContainer: ViewStyle
}

export type InputStyle = {
  input: ViewStyle;
}

export type PrimaryButtonStyle = {
  button: ViewStyle;
  buttonText: TextStyle;
}

export type HeaderStyle = {
  header: ViewStyle;
  headerWithBackButton: ViewStyle;
  headerNoBackButton: ViewStyle;
}

export type ListLinkStyle = {
  container: ViewStyle;
  title: TextStyle;
  icon: TextStyle;
}