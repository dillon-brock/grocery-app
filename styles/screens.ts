import { StyleSheet } from "react-native"
import { AllListsScreenStyle, CommonScreenStyle, DashboardScreenStyle, EntryScreenStyle } from "../types/styles";

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
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 60,
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

export const allListsScreenStyles: AllListsScreenStyle = StyleSheet.create<AllListsScreenStyle>({
  ...commonScreenStyles,
  buttonContainer: {
    width: '80%',
    borderColor: 'black',
  },
  listsContainer: {
    width: '100%',
    padding: 20
  },
  scrollContainer: {
    width: '100%',
    padding: 20,
  },
  subtitle: {
    fontSize: 30,
    fontFamily: 'Avenir-Oblique',
    textAlign: 'left',
    marginBottom: 10
  }
})
