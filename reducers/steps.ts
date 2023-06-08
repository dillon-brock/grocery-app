import { RecipeStep } from "../services/recipes/types";

export type StepsAction =
| { type: 'added', step: RecipeStep }
| { type: 'updated', step: RecipeStep, stepId: string }
| { type: 'deleted', stepId: string }

export default function stepsReducer(steps: RecipeStep[], action: StepsAction): RecipeStep[] {
  switch (action.type) {
    case 'added': {
      return [ ...steps, action.step ]
    }
    case 'updated': {
      return [
        ...steps.filter(step => step.id != action.stepId),
        action.step
      ]
    }
    case 'deleted': {
      return steps.filter(step => step.id != action.stepId)
    }
  }
}