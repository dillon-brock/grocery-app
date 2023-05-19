import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../types/types";

interface AllRecipesScreenStyle extends CommonScreenStyle {
  buttonContainer: ViewStyle;
  listsContainer: ViewStyle;
  scrollContainer: ViewStyle;
  subtitle: TextStyle;
  createButtonContainer: ViewStyle;
  createButton: ViewStyle;
  buttonText: TextStyle;
  screen: ViewStyle;
}

export default StyleSheet.create<AllRecipesScreenStyle>({
  screen: {
    backgroundColor: '#CCD5C5',
    height: '100%'
  },
  container: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 60,
  },
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
    fontSize: 24,
    fontFamily: 'Avenir-Oblique',
    textAlign: 'center',
    marginBottom: 10
  },
  createButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  createButton: {
    width: '70%',
    backgroundColor: '#4A757E',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 22,
    color: '#F8EBD5',
    textAlign: 'center'
  }
})