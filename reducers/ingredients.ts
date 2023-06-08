import { Ingredient } from "../services/ingredients/types";

export type IngredientsAction =
| { type: 'added', ingredient: Ingredient }
| { type: 'updated', ingredient: Ingredient, ingredientId: string }
| { type: 'deleted', ingredientId: string };

export default function ingredientsReducer(ingredients: Ingredient[], action: IngredientsAction): Ingredient[] {
  switch (action.type) {
    case 'added': {
      return [ ...ingredients, action.ingredient ];
    }
    case 'updated': {
      return [
        ...ingredients.filter(ingredient => ingredient.id != action.ingredientId),
        action.ingredient
      ]
    }
    case 'deleted': {
      return ingredients.filter(ingredient => ingredient.id != action.ingredientId)
    }
  }
}