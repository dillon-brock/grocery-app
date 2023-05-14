import { SuccessfulResponse } from "../../types/types";

export type Ingredient = {
  id: string;
  recipeId: string;
  name: string;
  amount: string | null;
}

export interface IngredientResponse extends SuccessfulResponse {
  ingredient: Ingredient;
}

export interface NewIngredientData {
  name: string;
  amount: string;
}

export type IngredientUpdateData = {
  name?: string;
  amount?: string;
}