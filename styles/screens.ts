import { StyleSheet } from "react-native"
import { CommonScreenStyle, DashboardScreenStyle, EntryScreenStyle } from "../types/styles";

export const commonScreenStyles: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  title: {
    fontSize: 50,
    fontFamily: 'Avenir-Oblique'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 60
  }
});

export const dashboardScreenStyles: DashboardScreenStyle = StyleSheet.create<DashboardScreenStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    gap: 40
  }
});

export const entryScreenStyles: EntryScreenStyle = StyleSheet.create<EntryScreenStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  },

});

export const loginScreenStyles: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  ...commonScreenStyles
});

export const signUpScreenStyles: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  ...commonScreenStyles
});

export const listScreenStyle: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  ...commonScreenStyles
});

