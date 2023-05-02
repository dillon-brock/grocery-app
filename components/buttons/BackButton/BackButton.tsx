import React from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/types";
import { Pressable } from "react-native";

export default function BackButton() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Pressable onPressOut={handleGoBack}>
      <Ionicons
        name="arrow-back-outline"
        size={30}
      />
    </Pressable>
  )
}