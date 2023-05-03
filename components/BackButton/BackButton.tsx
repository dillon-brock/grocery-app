import React from "react"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";
import IconButton from "../IconButton/IconButton";

export default function BackButton() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <IconButton 
      name="arrow-back-outline"
      handlePress={handleGoBack} />
  )
}