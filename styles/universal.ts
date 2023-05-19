import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { CommonScreenStyle } from "../types/types";

export const commonScreenStyles: CommonScreenStyle = StyleSheet.create<CommonScreenStyle>({
  container: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  }
});

type ModalStyle = {
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

export const modalStyles = StyleSheet.create<ModalStyle>({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F8EBD5',
    borderRadius: 10,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
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
});