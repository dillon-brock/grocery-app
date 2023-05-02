import { StyleSheet } from "react-native";
import { ListLinkStyle } from "../types/styles";

export default StyleSheet.create<ListLinkStyle>({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 18
  }
}); 