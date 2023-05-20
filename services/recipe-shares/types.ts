import { NewShareData, RecipeShare, SuccessfulResponse } from "../../types/types";

export interface NewRecipeShareData extends NewShareData {
  recipeId: string;
}

export interface RecipeShareRes extends SuccessfulResponse {
  recipeShare: RecipeShare
}