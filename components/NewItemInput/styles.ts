import { StyleSheet, ViewStyle } from "react-native"

type NewItemInputStyle = {
  container: ViewStyle;
  qtyContainer: ViewStyle;
  input: ViewStyle;
  itemContainer: ViewStyle;
}

export default StyleSheet.create<NewItemInputStyle>({
  container: { 
    flexDirection: 'row', 
    gap: 0, 
    alignItems: 'center' 
  },
  qtyContainer: {
    width: '15%',
    borderRightColor: 'gray',
    borderRightWidth: 1,
    paddingLeft: 10
  },
  input: {
    width: '100%',
    borderWidth: 0
  },
  itemContainer: {
    width: '70%',
    paddingLeft: 10
  }
});