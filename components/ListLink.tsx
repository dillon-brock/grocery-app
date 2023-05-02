import React from "react"
import { Pressable, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, RootStackParamList } from "../types/types";

type Props = {
  list: List;
}

export default function ListLink({ list }: Props) {

  const createdAtFormatted: string = (new Date(list.createdAt)).toDateString();
  const formattedPlaceholderName = `${createdAtFormatted} (${list.id})`;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoToList = () => {
    navigation.navigate('ListDetail', 
    { list: { ...list, items: [] },
    type: 'existing'
  });
  }

  return (
    <Pressable onPressOut={handleGoToList}>
      <View style={{ height: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{list.title ? list.title : formattedPlaceholderName}</Text>
        <Ionicons name="chevron-forward-outline" />
      </View>
    </Pressable>
  )
}