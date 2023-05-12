import { SuccessfulResponse } from '../../types/types';

export type RecipeStep = {
  id: string;
  num: number;
  detail: string;
  recipeId: string;
}

export type Ingredient = {
  id: string;
  recipeId: string;
  name: string;
  amount: string | null;
}

export interface Recipe {
  id: string;
  ownerId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface RecipeWithDetail extends Recipe {
  steps: RecipeStep[];
  ingredients: Ingredient[];
}

export interface RecipeResponse extends SuccessfulResponse {
  recipe: Recipe;
}

export interface MultipleRecipeResponse extends SuccessfulResponse {
  recipes: Recipe[]
}

export interface NewRecipeData {
  name: string;
}

export interface RecipeWithDetailResponse extends SuccessfulResponse {
  recipe: RecipeWithDetail
}

