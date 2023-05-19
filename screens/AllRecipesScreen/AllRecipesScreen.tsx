import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useOwnedRecipes } from "../../hooks/useOwnedRecipes";
import Header from "../../components/molecules/Header/Header";
import { Recipe } from "../../services/recipes/types";
import DetailLink from "../../components/molecules/DetailLink/DetailLink";
import NewRecipeModal from "../../components/organisms/NewRecipeModal/NewRecipeModal";
import styles from './styles';
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";

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
          <ScreenTitle text="Your Recipes" color="#E16A64" />
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