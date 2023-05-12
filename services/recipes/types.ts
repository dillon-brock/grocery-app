import { SuccessfulResponse } from '../../types/types';

export type Recipe = {
  id: string;
  ownerId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface RecipeResponse extends SuccessfulResponse {
  recipe: Recipe;
}

export interface MultipleRecipeResponse extends SuccessfulResponse {
  recipes: Recipe[]
}

export interface NewRecipeData {
  name: string;
  description: string | null;
}

