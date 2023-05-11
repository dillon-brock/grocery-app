import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListStackParamList, RecipeStackParamList } from "../../types/types";

type Props = {
  text: string;
  id: string;
  type: 'List' | 'Recipe';
}

export default function DetailLink({ text, id, type }: Props) {


  const handleGoToDetail = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ListStackParamList>>();
    if (type == 'List') {
      navigation.navigate('ListDetail', {
        listId: id,
        type: 'existing'
      })
    }
    else {
      const navigation = useNavigation<NativeStackNavigationProp<RecipeStackParamList>>();
      navigation.navigate('RecipeDetail', {
        recipeId: id,
        type: 'existing'
      })
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