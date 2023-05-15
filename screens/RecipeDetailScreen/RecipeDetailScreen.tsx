import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import { addIngredient } from "../../services/ingredients/ingredients";
import LockButton from "../../components/LockButton/LockButton";
import IngredientList from "../../components/IngredientList/IngredientList";
import StepList from "../../components/StepList/StepList";
import styles from './styles';

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, ingredients, setIngredients, steps, setSteps, loading } = useRecipe(recipeId);
  const [locked, setLocked] = useState<boolean>(true);

  const handleAddIngredient = async (name: string, amount: string): Promise<void> => {
    const newIngredientRes = await addIngredient(recipeId, { name, amount });
    if (newIngredientRes.success) {
      setIngredients(prev => [...prev, newIngredientRes.ingredient]);
    }
  }

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
            <IngredientList
              ingredients={ingredients}
              locked={locked}
              setIngredients={setIngredients}
              handleAddIngredient={handleAddIngredient} />
            <StepList 
              recipeId={recipe.id}
              steps={steps}
              setSteps={setSteps}
              locked={locked} />
          </View>
        }
      </ScrollView>
    </View>
  );
}