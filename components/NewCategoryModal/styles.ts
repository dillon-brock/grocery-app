import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type NewCategoryModalStyle = {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  addButton: ViewStyle;
  cancelButton: ViewStyle;
  buttonText: TextStyle;
  addButtonText: TextStyle;
  cancelButtonText: TextStyle;
}

export default StyleSheet.create<NewCategoryModalStyle>({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F8EBD5',
    borderRadius: 20,
    padding: 25,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 22,
    color: '#4A757E',
    textAlign: 'left'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 40,
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 8,
    borderWidth: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: '#E16A64',
  },
  buttonText: {
    fontWeight: '800'
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  addButton: {
    backgroundColor: '#E16A64',
  },
  cancelButtonText: {
    color: '#E16A64'
  },
  addButtonText: {
    color: '#F8EBD5'
  }
})