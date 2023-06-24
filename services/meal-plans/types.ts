import { MealPlanWithRecipes, SuccessfulResponse } from "../../types/types";

export interface MealPlanWithRecipesResponse extends SuccessfulResponse {
  mealPlan: MealPlanWithRecipes;
}