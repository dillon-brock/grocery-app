import React, { Dispatch, SetStateAction } from "react"
import { Text, View } from "react-native"
import { RecipeStep, RecipeWithDetail } from "../../services/recipes/types"
import StepDisplay from "../StepDisplay/StepDisplay"
import NewStepInput from "../NewStepInput/NewStepInput"
import EditableStep from "../EditableStep/EditableStep"

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
        .map(step => {
          if (locked) {
            return (
            <StepDisplay
              key={step.id}
              num={step.num} 
              detail={step.detail} />
            );
          }
          else {
            return (
              <EditableStep
                key={step.id}
                id={step.id}
                num={step.num}
                detail={step.detail}
                setRecipe={setRecipe}
              />
            )
          }
        })}
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