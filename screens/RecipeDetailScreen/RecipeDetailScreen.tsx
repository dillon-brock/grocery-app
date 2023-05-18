import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/molecules/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import LockButton from "../../components/atoms/buttons/LockButton/LockButton";
import IngredientList from "../../components/organisms/IngredientList/IngredientList";
import StepList from "../../components/organisms/StepList/StepList";
import styles from './styles';

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, ingredients, setIngredients, steps, setSteps, loading } = useRecipe(recipeId);
  const [locked, setLocked] = useState<boolean>(true);

  return (
    <View style={styles.screen}>
      <Header showBackButton showMenuButton />
      <LockButton locked={locked} setLocked={setLocked} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          <View style={styles.container}>
            <View style={styles.centerTitle}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{recipe.name}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.subtitle}>INGREDIENTS</Text>
              <IngredientList
                ingredients={ingredients}
                locked={locked}
                setIngredients={setIngredients}
                recipeId={recipe.id} />
            </View>
            <View>
              <Text style={styles.subtitle}>STEPS</Text>
              <StepList 
                recipeId={recipe.id}
                steps={steps}
                setSteps={setSteps}
                locked={locked} />
            </View>
          </View>
        }
      </ScrollView>
    </View>
  );
}