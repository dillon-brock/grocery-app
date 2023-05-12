import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { modalStyles } from "../../styles/universal";
import Input from "../Input/Input";
import { createRecipe } from "../../services/recipes/reicpes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "../../types/types";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function NewRecipeModal({ visible, setVisible }: Props) {

  const [name, setName] = useState<string>('');
  const [error, setError] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RecipeStackParamList>>();

  const handleCreateRecipe = async (): Promise<void> => {
    const newRecipeRes = await createRecipe({ name });

    if (newRecipeRes.success) {
      setVisible(prev => !prev);
      navigation.navigate('RecipeDetail', {
        recipeId: newRecipeRes.recipe.id,
        type: 'new'
      });
    }
    else {
      setError(newRecipeRes.message);
    }
  }

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
              onChange={(e) => setName(e.nativeEvent.text)} />
            {error &&
              <Text>{error}</Text>
            }
            <View style={modalStyles.buttonsContainer}>
              <Pressable
                style={[modalStyles.button, modalStyles.cancelButton]}
                onPress={() => setVisible(!visible)}>
                <Text style={[modalStyles.buttonText, modalStyles.cancelButtonText]}>CANCEL</Text>
              </Pressable>
              <Pressable 
              style={[modalStyles.button, modalStyles.addButton]}
              onPress={handleCreateRecipe}>
                <Text style={[modalStyles.buttonText, modalStyles.addButtonText]}>ADD</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </Modal>
  )
}