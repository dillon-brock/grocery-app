import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useOwnedRecipes } from "../../hooks/useOwnedRecipes";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Recipe } from "../../services/recipes/types";
import DetailLink from "../../components/DetailLink/DetailLink";

export default function AllRecipesScreen() {

  const { recipes, loading, errorMessage } = useOwnedRecipes();

  useCheckForLogOut();

  return (
    <>
      <Header showBackButton showMenuButton />
      <View>
        <Text>Your Recipes</Text>
        {recipes.length == 0 &&
          <Text>You do not have any recipes yet!</Text>
        }
        {errorMessage &&
          <Text>{errorMessage}</Text>
        }
        {loading &&
          <Text>Loading...</Text>
        }
        <View>
          <PrimaryButton 
            text="Start Shopping"
          />
        </View>
        {recipes.length > 0 &&
          <ScrollView>
            {recipes.map((recipe: Recipe) => (
              <DetailLink key={recipe.id} id={recipe.id} text={recipe.name} type='Recipe' />
            ))}
          </ScrollView>
        }
      </View>
    </>
  );
}