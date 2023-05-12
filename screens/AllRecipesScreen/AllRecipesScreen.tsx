import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useOwnedRecipes } from "../../hooks/useOwnedRecipes";
import Header from "../../components/Header/Header";
import { Recipe } from "../../services/recipes/types";
import DetailLink from "../../components/DetailLink/DetailLink";
import NewRecipeModal from "../../components/NewRecipeModal/NewRecipeModal";
import styles from './styles';

export default function AllRecipesScreen() {

  const { recipes, loading, errorMessage } = useOwnedRecipes();
  const [userWantsToCreateRecipe, setUserWantsToCreateRecipe] = useState<boolean>(false);

  useCheckForLogOut();

  return (
    <>
      <NewRecipeModal visible={userWantsToCreateRecipe}
        setVisible={setUserWantsToCreateRecipe}
      />
      <View style={styles.screen}>
        <Header showBackButton showMenuButton />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your Recipes</Text>
          </View>
          {recipes.length == 0 &&
            <Text style={styles.subtitle}>You do not have any recipes yet!</Text>
          }
          {errorMessage &&
            <Text>{errorMessage}</Text>
          }
          {loading &&
            <Text>Loading...</Text>
          }
          <View style={styles.createButtonContainer}>
            <Pressable style={styles.createButton} 
            onPress={() => setUserWantsToCreateRecipe(true)}>
              <Text style={styles.buttonText}>Create Recipe</Text>
            </Pressable>
          </View>
          {recipes.length > 0 &&
            <ScrollView>
              {recipes.map((recipe: Recipe) => (
                <DetailLink key={recipe.id} id={recipe.id} text={recipe.name} type='Recipe' />
              ))}
            </ScrollView>
          }
        </View>
      </View>
    </>
  );
}