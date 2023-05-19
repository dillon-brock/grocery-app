import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type ShareModalStyle = {
  modalView: ViewStyle;
  subtitle: TextStyle;
  subtitleContainer: ViewStyle;
  section: ViewStyle;
  permissionsContainer: ViewStyle;
}

export default StyleSheet.create<ShareModalStyle>({
  modalView: {
    width: '75%',
    borderWidth: 2,
    borderColor: '#E16A64'
  },
  section: {
    width: '80%'
  },
  subtitle: {
    textAlign: 'left',
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A757E',
    width: '50%'
  },
  permissionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 5,
    marginBottom: 5
  }
})

