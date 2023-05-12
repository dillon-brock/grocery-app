import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { modalStyles } from "../../styles/universal";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function NewRecipeModal({ visible, setVisible }: Props) {

  const [recipeName, setRecipeName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showDescriptionInput, setShowDescriptionInput] = useState<boolean>(false);

  return (
    <Modal 
    visible={visible} 
    onRequestClose={() => {
      setVisible(prev => !prev);
    }}>
      <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.title}>New Recipe</Text>
            <Input 
              type="text" 
              placeholder="Name"
              onChange={(e) => setRecipeName(e.nativeEvent.text)} />
            {!showDescriptionInput &&
              <PrimaryButton 
                text="Add description"
                handlePress={() => setShowDescriptionInput(prev => !prev)} />
            }
            {showDescriptionInput &&
              <TextInput
                editable
                multiline
                numberOfLines={4}
                onChange={(e) => setDescription(e.nativeEvent.text)}
              />
            }
            <View style={modalStyles.buttonsContainer}>
              <Pressable
                style={[modalStyles.button, modalStyles.cancelButton]}
                onPress={() => setVisible(!visible)}>
                <Text style={[modalStyles.buttonText, modalStyles.cancelButtonText]}>CANCEL</Text>
              </Pressable>
              <Pressable 
              style={[modalStyles.button, modalStyles.addButton]}
              onPress={() => {null}}>
                <Text style={[modalStyles.buttonText, modalStyles.addButtonText]}>ADD</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </Modal>
  )
}