import React, { Dispatch, SetStateAction } from "react"
import { Text, View } from "react-native"
import { RecipeStep, RecipeWithDetail } from "../../services/recipes/types"
import StepDisplay from "../StepDisplay/StepDisplay"
import NewStepInput from "../NewStepInput/NewStepInput"

type Props = {
  steps: RecipeStep[];
  recipeId: string;
  locked: boolean;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
}

export default function StepList({ steps, recipeId, setRecipe, locked }: Props) {

  return (
    <View>
      <Text>Steps</Text>
      <View>
        {steps
        .sort((a, b) => a.num - b.num)
        .map(step => (
          <StepDisplay 
            num={step.num} 
            detail={step.detail} />
        ))}
        {!locked &&
          <NewStepInput 
            num={steps.length + 1}
            recipeId={recipeId}
            setRecipe={setRecipe} />
        }
      </View>
    </View>
  )
}