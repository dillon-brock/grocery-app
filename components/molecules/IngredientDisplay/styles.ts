import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type IngredientStyle = {
  container: ViewStyle;
  amountContainer: ViewStyle;
  amount: TextStyle;
  nameContainer: ViewStyle;
  name: TextStyle;
}

export default StyleSheet.create<IngredientStyle>({
  container: {
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4
  },
  amountContainer: {
    width: '15%',
    borderRightColor: 'gray',
    borderRightWidth: 1,
    paddingLeft: 10
  },
  amount: {
  },
  nameContainer: {
    width: '70%',
    paddingLeft: 10
  },
  name: {
    
  }
})