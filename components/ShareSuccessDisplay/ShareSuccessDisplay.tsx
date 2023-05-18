import { useNavigation } from "@react-navigation/native";
import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ShareSuccessDisplay({ title, setVisible }: Props) {

  const navigation = useNavigation();

  return (
    <View>
      <Text>{`${title} shared successfully!`}</Text>
      <View>
        <Pressable onPress={() => setVisible(prev => !prev)}>
          <Text>Share with more users</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Return to list</Text>
        </Pressable>
      </View>
    </View>
  )
}