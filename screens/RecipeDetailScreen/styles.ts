import { StyleSheet, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../../types/types";

interface RecipeDetailScreenStyle extends CommonScreenStyle {
  screen: ViewStyle;
  centerTitle: ViewStyle;
}

export default StyleSheet.create<RecipeDetailScreenStyle>({
  screen: {
    backgroundColor: '#CCD5C5',
    height: '100%'
  },
  title: {
    fontSize: 35,
    fontFamily: 'Avenir-Oblique',
    fontWeight: '600',
    color: '#E16A64'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 4,
    borderBottomColor: '#E16A64',
    borderBottomWidth: 3,
  },
  centerTitle: {
    alignItems: 'center'
  },
  container: {
    gap: 30,
    paddingTop: 8,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20
  }
})