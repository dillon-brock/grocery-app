import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Input from "../Input/Input";
import { addCategory } from "../../services/categories/categories";
import { ListWithDetail } from "../../types/types";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>
  setList: Dispatch<SetStateAction<ListWithDetail>>
}

export default function NewCategoryModal({ visible, setVisible, setList }: Props) {

  const [categoryName, setCategoryName] = useState<string>('');

  const handleAddCategory = async () => {
    if (categoryName != '') {
      const newCategoryRes = await addCategory(categoryName);
      if (newCategoryRes.success) {
        setList(prev => ({
          ...prev,
          categories: [
            ...prev.categories,
            newCategoryRes.category
          ]
        }));
        setVisible(false);
      } 
    }
  }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View>
          <Input 
            type="text" 
            placeholder="Name"
            onChange={(e) => setCategoryName(e.nativeEvent.text)} />
          <View>
            <Pressable
              onPress={() => setVisible(!visible)}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleAddCategory}>
              <Text>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}