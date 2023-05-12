import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useOwnedRecipes } from "../../hooks/useOwnedRecipes";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Recipe } from "../../services/recipes/types";
import DetailLink from "../../components/DetailLink/DetailLink";
import NewRecipeModal from "../../components/NewRecipeModal/NewRecipeModal";

export default function AllRecipesScreen() {

  const { recipes, loading, errorMessage } = useOwnedRecipes();
  const [userWantsToCreateRecipe, setUserWantsToCreateRecipe] = useState<boolean>(false);

  useCheckForLogOut();

  return (
    <>
      <Header showBackButton showMenuButton />
      <NewRecipeModal visible={userWantsToCreateRecipe}
        setVisible={setUserWantsToCreateRecipe}
      />
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
            handlePress={() => setUserWantsToCreateRecipe(true)}
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