import React from "react"
import { Text, View } from "react-native"
import { RecipeStep } from "../../services/recipes/types"
import StepDisplay from "../StepDisplay/StepDisplay"

type Props = {
  steps: RecipeStep[]
}

export default function StepList({ steps }: Props) {

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
        )
        )}
      </View>
    </View>
  )
}