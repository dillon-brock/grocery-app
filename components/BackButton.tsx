import React from "react"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

export default function BackButton() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
      <AntDesign.Button 
        name="back"
        onPressOut={handleGoBack}
        style={{ width: 50 }}
      />
  )
}