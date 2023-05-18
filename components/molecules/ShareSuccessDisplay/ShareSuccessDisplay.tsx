import { useNavigation } from "@react-navigation/native";
import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import { ShareStatus } from "../../../types/types";

type Props = {
  title: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setShareStatus: Dispatch<SetStateAction<ShareStatus>>;
}

export default function ShareSuccessDisplay({ title, setVisible, setShareStatus }: Props) {

  const navigation = useNavigation();

  const handleContinue = () => {
    setVisible(prev => !prev);
    setShareStatus(ShareStatus.none);
  }

  const handleGoBack = () => {
    setShareStatus(ShareStatus.none);
    navigation.goBack();
  }

  return (
    <View>
      <Text>{`${title} shared successfully!`}</Text>
      <View>
        <Pressable onPress={handleContinue}>
          <Text>Share with more users</Text>
        </Pressable>
        <Pressable onPress={handleGoBack}>
          <Text>Return to list</Text>
        </Pressable>
      </View>
    </View>
  )
}