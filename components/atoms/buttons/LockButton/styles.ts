import { StyleSheet, ViewStyle } from "react-native";

type LockButtonStyles = {
  container: ViewStyle;
}

export default StyleSheet.create<LockButtonStyles>({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 145,
    right: 30
  }
})