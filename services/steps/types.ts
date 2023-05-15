import { SuccessfulResponse } from "../../types/types";
import { RecipeStep } from "../recipes/types";

export interface NewStepData {
  num: number;
  detail: string;
}

export interface StepResponse extends SuccessfulResponse {
  step: RecipeStep;
}