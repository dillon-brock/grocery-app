import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/molecules/Header/Header";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList, RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import LockButton from "../../components/atoms/buttons/LockButton/LockButton";
import IngredientList from "../../components/organisms/IngredientList/IngredientList";
import StepList from "../../components/organisms/StepList/StepList";
import styles from './styles';
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";
import ShareButton from "../../components/atoms/buttons/ShareButton/ShareButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, ingredients, steps, loading } = useRecipe(recipeId);
  const [locked, setLocked] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const goToShareScreen = () => {
    navigation.navigate('Share', {
      id: recipeId,
      name: recipe.name,
      type: 'recipe'
    })
  }

  return (
    <View style={styles.screen}>
      <Header showBackButton showMenuButton />
      <LockButton locked={locked} setLocked={setLocked} />
      <ShareButton goToShareScreen={goToShareScreen} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          <View style={styles.container}>
            <ScreenTitle text={recipe.name} color="#E16A64" />
            <View>
              <Text style={styles.subtitle}>INGREDIENTS</Text>
              <IngredientList
                initialIngredients={ingredients}
                locked={locked}
                recipeId={recipe.id} />
            </View>
            <View>
              <Text style={styles.subtitle}>STEPS</Text>
              <StepList 
                recipeId={recipe.id}
                initialSteps={steps}
                locked={locked} />
            </View>
          </View>
        }
      </ScrollView>
    </View>
  );
}