import React, { Reducer, useReducer } from "react"
import { View } from "react-native"
import { RecipeStep } from "../../../services/recipes/types"
import StepDisplay from "../../molecules/StepDisplay/StepDisplay"
import NewStepInput from "../../molecules/NewStepInput/NewStepInput"
import EditableStep from "../../molecules/EditableStep/EditableStep"
import stepsReducer, { StepsAction } from "../../../reducers/steps"

type Props = {
  initialSteps: RecipeStep[];
  recipeId: string;
  locked: boolean;
}

export default function StepList({ initialSteps, recipeId, locked }: Props) {

  const [steps, dispatch] = useReducer<Reducer<RecipeStep[], StepsAction>>(stepsReducer, initialSteps);

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
                dispatch={dispatch}
              />
            )
          }
        })}
        {!locked &&
          <NewStepInput 
            num={steps.length + 1}
            recipeId={recipeId}
            dispatch={dispatch} />
        }
      </View>
    </View>
  )
}