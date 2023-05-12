import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
  id: string;
  type: 'List' | 'Recipe';
}

export default function DetailLink({ text, id, type }: Props) {

  const navigation = useNavigation();

  const handleGoToDetail = () => {
    if (type == 'List') {
      navigation.navigate('ListDetail' as never, {
        listId: id,
        type: 'existing'
      } as never)
    }
    else if (type == 'Recipe') {
      navigation.navigate('RecipeDetail' as never, {
        recipeId: id,
        type: 'existing'
      } as never)
    }
  }

  return (
    <Pressable onPress={handleGoToDetail}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Ionicons
          name="chevron-forward-outline"
          style={styles.icon} />
      </View>
    </Pressable>
  )
}