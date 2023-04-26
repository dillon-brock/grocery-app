import { StyleSheet } from "react-native"

export const commonScreenStyles = StyleSheet.create({
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

export const dashboardScreenStyles = StyleSheet.create({
  ...commonScreenStyles,
  buttonContainer: {
    gap: 40
  }
});

export const entryScreenStyles = StyleSheet.create({
  ...commonScreenStyles,
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  }
});

export const loginScreenStyles = StyleSheet.create({
  ...commonScreenStyles
});

export const signUpScreenStyles = StyleSheet.create({
  ...commonScreenStyles
});

