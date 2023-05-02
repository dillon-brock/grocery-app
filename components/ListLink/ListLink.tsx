import React from "react"
import { Pressable, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, ListStackParamList } from "../../types/types";
import styles from './styles';

type Props = {
  list: List;
}

export default function ListLink({ list }: Props) {

  const createdAtFormatted: string = (new Date(list.createdAt)).toDateString();
  const formattedPlaceholderName = `${createdAtFormatted} (${list.id})`;
  const navigation = useNavigation<NativeStackNavigationProp<ListStackParamList>>();

  const handleGoToList = () => {
    navigation.navigate('ListDetail', { 
      listId: list.id,
      type: 'existing'
    });
  }

  return (
    <Pressable onPressOut={handleGoToList}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {list.title ? list.title : formattedPlaceholderName}
        </Text>
        <Ionicons 
          name="chevron-forward-outline"
          style={styles.icon} />
      </View>
    </Pressable>
  )
}