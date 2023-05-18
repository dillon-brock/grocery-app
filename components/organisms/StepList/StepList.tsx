import React, { Dispatch, SetStateAction } from "react"
import { View } from "react-native"
import { RecipeStep } from "../../../services/recipes/types"
import StepDisplay from "../../molecules/StepDisplay/StepDisplay"
import NewStepInput from "../../molecules/NewStepInput/NewStepInput"
import EditableStep from "../../molecules/EditableStep/EditableStep"

type Props = {
  steps: RecipeStep[];
  recipeId: string;
  locked: boolean;
  setSteps: Dispatch<SetStateAction<RecipeStep[]>>;
}

export default function StepList({ steps, recipeId, setSteps, locked }: Props) {

  return (
    <View>
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
                setSteps={setSteps}
              />
            )
          }
        })}
        {!locked &&
          <NewStepInput 
            num={steps.length + 1}
            recipeId={recipeId}
            setSteps={setSteps} />
        }
      </View>
    </View>
  )
}